<script setup lang="ts">
useSeoMeta({
  title: "Portfolio | Focus Flooring",
  description:
    "Some of the high quality flooring solutions delivered by Focus flooring",
});

const route = useRoute();
const router = useRouter();
const isMounted = ref(false);
const category = useState("category", () => shallowRef("All"));
const set = useState("set", () => {
  const temp = new Set();
  temp.add("All");
  return temp;
});

// Only set the category after client-side hydration
onMounted(() => {
  isMounted.value = true;
  // @ts-ignore
  category.value = route.query.category?.split("+").join("")
    ? route.query.category
    : "All";
});

// Move the router push into a watch that only triggers after mounting
watch(category, (newValue) => {
  if (isMounted.value) {
    router.push({
      path: "/portfolio",
      query: { category: newValue.split("+").join("") },
    });
  }
});

useHead(() => ({
  link: [
    {
      rel: "canonical",
      href: "https://focus-flooring.com" + route.path,
    },
  ],
}));

type Project = {
  id: number;
  name: string;
  size: string;
  cost: number;
  client: string;
  scope: string;
  image: string;
  alt?: string;
  category: string;
  date?: Date;
};

const { data: projects } = useProjects();

const filteredProjects = computed(() => {
  if (projects.value === null) return;
  // @ts-ignore
  return useFilter(projects.value, category.value).sort(
    // @ts-ignore
    (a, b) => b.date - a.date,
  );
});

const catagories = computed(() => {
  if (!projects.value) return ["All"];
  projects.value.forEach((project: Project) =>
    set.value.add(project.category?.trim()),
  );
  return Array.from(set.value);
});
</script>

<template>
  <div>
    <Hero>Portfolio</Hero>
    <div
      class="sticky top-0 form-control w-full bg-[var(--midnight)] mb-8 py-4 z-10 shadow-xl"
    >
      <div class="container mx-auto">
        <ClientOnly>
          <USelectMenu v-model="category" :options="catagories" />
        </ClientOnly>
      </div>
    </div>
    <div class="container">
      <main id="main">
        <h2 class="margin-bottom">
          {{ category === "All" ? "All Projects" : category }}
        </h2>
        <UBlogList
          orientation="horizontal"
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16"
          :ui="{
            horizontal: '',
            title:
              'text-gray-900 dark:text-white text-xl font-semibold group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200',
          }"
        >
          <ProjectCard v-for="item in filteredProjects" v-bind="item" />
        </UBlogList>
      </main>
    </div>
  </div>
</template>

<style scoped>
.projects {
  container-type: inline-size;
}
.team-container {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: dense;
}
@media (min-width: 741px) {
  .team-container {
    display: grid;
    gap: 1rem;
    grid-auto-flow: dense;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}
</style>
