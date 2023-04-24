<script setup lang="ts">
	useHead({
		title: 'Focus Flooring - Portfolio'
	})

	const route = useRoute()

	const catagory = ref<any>('')
	catagory.value = route.query.catagory ? route.query.catagory : 'All'

	type Project = {
		id: number
		name: string
		size: string
		cost: number
		client: string
		scope: string
		image: string
		alt?: string
		catagory: string
	}

	const projects = ref<Project[]>([
		{
			id: 1,
			name: 'Veolia - Tampa Water treatment',
			size: '225 sf',
			cost: 1367,
			client: 'Wehr Constructors',
			scope: 'Resilient flooring, vinyl base',
			image:
				'/Focus_Flooring_Projects/Veolia-TampaWaterTreatment.jpeg?updatedAt=1679969240764',
			catagory: 'Industrial'
		},
		{
			id: 2,
			name: 'DTP3 - Pasco',
			size: '16.6k sf',
			cost: 1367,
			client: 'Ryan Companies',
			scope:
				'Floor tile, wall tile, interlocking floor mats, carpet tile, tile base, vinyl base, epoxy floor coating, sealed concrete, epoxy integral base, final cleaning, kerdi shower system, schluter, vinyl transition, marble thresholds',
			image: '/Focus_Flooring_Projects/DTP3_Amazon.jpeg',
			catagory: 'Industrial'
		},
		{
			id: 3,
			name: 'Revealing Truth Ministries',
			size: '42k sf',
			cost: 1367,
			client: 'Revealing Truth Ministries',
			scope:
				'Extensive floor prep, carpet tile, large format tile, porcelain tile, LVT, broadloom carpet, millwork base',
			image: '/Focus_Flooring_Projects/RevealingTruthMinistries.jpg',
			catagory: 'Worship Centers'
		},
		{
			id: 4,
			name: 'Mount Olive Baptist Church',
			size: '12k sf',
			cost: 62000,
			client: 'Mount Olive Baptist Church',
			scope: 'Extensive floor prep, carpet tile, porcelain tile, LVT',
			image: '/Focus_Flooring_Projects/MountOliveBaptist.jpg',
			catagory: 'Worship Centers'
		},
		{
			id: 5,
			name: 'The Rock Church of God by Faith',
			size: '8k sf',
			cost: 20000,
			client: 'The Rock Church of God by Faith',
			scope: 'Carpet tile, rubber cove base',
			image: '/Focus_Flooring_Projects/TheRockChurchofGodbyFaith.jpg',
			catagory: 'Worship Centers'
		},
		{
			id: 6,
			name: 'West river T3A,T3B & T3C',
			size: '448k sf',
			cost: 2310352,
			client: 'Suffolk',
			scope:
				'Three towers; floor tile, wall tile, LVT, vinyl base, sealed concrete, marble thresholds, tile base, schluter, vinyl transitions',
			image: '/Focus_Flooring_Projects/WestRiver.jpg',
			catagory: 'Residential & Hospitality'
		},
		{
			id: 7,
			name: 'Heron Tampa at Waterstreet',
			size: '72.6k sf',
			cost: 1390627.04,
			client: 'Coastal',
			scope:
				'Floor tile, wall tile, large format tile, resilient flooring, carpet tile, tile base, resilient base, mud bed, ditra underlayment, geniemat underlayment, schluter, rubber transitions, extensive floor prep',
			image: '/Focus_Flooring_Projects/Heron_Tampa.jpg',
			catagory: 'Residential & Hospitality'
		},
		{
			id: 8,
			name: 'Cora at Waterstreet',
			size: '80k lf',
			cost: 253008,
			client: 'Moss',
			scope: 'Resilient base throughout all units and corridors',
			image: '/Focus_Flooring_Projects/TheCora.png',
			catagory: 'Residential & Hospitality'
		},
		{
			id: 9,
			name: 'The Asher at Waterstreet',
			size: '270k sf',
			cost: 1960617,
			client: 'Suffolk',
			scope: 'LVT,carpet tile, resilient base, schluter, Aquaflex',
			image: '/Focus_Flooring_Projects/TheAsher.jpg',
			catagory: 'Residential & Hospitality'
		},
		{
			id: 10,
			name: 'Tempo at Encore',
			size: '90k sf',
			cost: 1600000,
			client: 'Kast',
			scope:
				'Floor tile, wall tile, tile base, carpet tile, rubber flooring, LVT, rubber base, schluter, vinyl transitions, extensive floor prep',
			image: '/Focus_Flooring_Projects/tempo_encore.jpeg',
			catagory: 'Residential & Hospitality'
		},
		{
			id: 11,
			name: 'Cortona Apartments',
			size: '116k sf',
			cost: 850000,
			client: 'Core',
			scope:
				'Floor tile, wall tile, tile base, carpet, rubber flooring, LVT, rubber base, schluter, vinyl transitions',
			image: '/Focus_Flooring_Projects/Cortona_Apartments.jpg',
			catagory: 'Residential & Hospitality'
		},
		{
			id: 12,
			name: 'Tampa Oaks Senior Living',
			size: '50k sf',
			cost: 500000,
			client: 'Core',
			scope:
				'Floor tile, wall tile, tile base, carpet tile, rubber flooring, LVT, rubber base, schluter, vinyl transitions',
			image: '/Focus_Flooring_Projects/TampaOaksSeniorLiving.jpeg',
			catagory: 'Residential & Hospitality'
		},
		{
			id: 13,
			name: 'Westshore Grand',
			size: '35k sf',
			cost: 200000,
			client: 'LMG',
			scope: 'Broadloom carpet, base',
			image: '/Focus_Flooring_Projects/WestShoreGrand.jpeg',
			catagory: 'Residential & Hospitality'
		},
		{
			id: 14,
			name: 'Even Hotel',
			size: '30k sf',
			cost: 215000,
			client: 'LMG',
			scope:
				'Floor tile, wall tile, tile base, carpet tile, rubber flooring, LVT, rubber base, schluter, vinyl transitions, extensive floor prep',
			image: '/Focus_Flooring_Projects/EVEN_Hotels.jpeg',
			catagory: 'Residential & Hospitality'
		},
		{
			id: 15,
			name: 'Skycenter One Hotel',
			size: '14K SF; 13K LF of base',
			cost: 225428,
			client: 'JE Dunn',
			scope:
				'LVT, Static Dissipative tile, rubber flooring, broadloam carpet, carpet tile, wood flooring, rubber base, heat weld, skudoboard, rubber transitions',
			image: '/Focus_Flooring_Projects/SkyCenterOne.jpeg',
			catagory: 'Commercial Office & Retail'
		},
		{
			id: 16,
			name: 'Rivergate Tower',
			size: '16K SF',
			cost: 250000,
			client: 'Rubicon Construction',
			scope: 'Rubber Flooring, Floor tile, Wall tile',
			image: '/Focus_Flooring_Projects/RivergateTower.jpeg',
			catagory: 'Commercial Office & Retail'
		},
		{
			id: 17,
			name: 'Anand Vihar Clubhouse',
			size: '12K SF',
			cost: 150000,
			client: 'Onicx Construction',
			scope: 'Floor tile, wall tile, resilient flooring, broadloom carpet',
			image: '/Focus_Flooring_Projects/Anand_Vihar_Clubhouse.jpeg',
			catagory: 'Commercial Office & Retail'
		},
		{
			id: 18,
			name: 'Greater Tampa Chamber of Commerce',
			size: '7.6K SF',
			cost: 50000,
			client: 'Beck Group',
			scope:
				'Carpet tile, resilient flooring, rubber base, wall tile, transition strips',
			image: '/Focus_Flooring_Projects/ChamberOfCommerce.jpg',
			catagory: 'Commercial Office & Retail'
		},
		{
			id: 19,
			name: 'Sarasota housing authoriy - OCB office renovation',
			size: '850K SF',
			cost: 7804,
			client: 'Onicx Construction',
			scope:
				'Floor tile, resilient flooring, MDF base, tile base, schluter, rubber transition',
			image: '/Focus_Flooring_Projects/SHA.jpg',
			catagory: 'Commercial Office & Retail'
		},
		{
			id: 20,
			name: 'Citi Tampa A1G1 Lobby & Restrooms renovation',
			size: '8K SF',
			cost: 206780,
			client: 'DPR',
			scope:
				'Tile demo, carpet inset demo, floor tile, wall tile, resilient, carpet tile, tile base, rubber base, waterproofing, crack isolation, schluter',
			image: '/Focus_Flooring_Projects/Citi_Tampa_Amenities.jpg',
			catagory: 'Commercial Office & Retail'
		},
		{
			id: 21,
			name: 'Citi Tampa Aminites',
			size: '102K SF',
			cost: 1021114,
			client: 'DPR',
			scope:
				'Floor tile, wall tile, static control VCT, sheet flooring, LVT, interlocking mats, carpet tile, tile base, rubber base, rubber flooring, heat weld, crack isolation, schluter, rubber transition',
			image: '/Focus_Flooring_Projects/Citi_Tampa_Amenities.jpg',
			catagory: 'Commercial Office & Retail'
		},
		{
			id: 22,
			name: 'Tampa International Airport main Terminal curbside expansion blue side & Central utility plant building',
			size: '36K SF',
			cost: 612646,
			client: 'Hensel Phelps',
			scope:
				'Floor tile, wall tile, static dissipative tile/resilient flooring, caret tile, broadloam carpet, rubber base, waterproofing, epoxy grout, schluter',
			image:
				'/Focus_Flooring_Projects/TAMPAINTERNATIONALAIRPORT_MAIN_BLUE.jpeg',
			catagory: 'Aviation'
		},
		{
			id: 23,
			name: 'Tampa International Airport floor prep throughout all airsides and main terminal',
			size: '200K SF',
			cost: 2600000,
			client: 'Skanksa',
			scope: 'Extensive floor prep',
			image: '/Focus_Flooring_Projects/TAMPAINTERNATIONALAIRPORT.jpeg',
			catagory: 'Aviation'
		},
		{
			id: 24,
			name: 'Tampa International Airport Security',
			size: '2K SF',
			cost: 140000,
			client: 'Beck Group',
			scope: 'Wall tile, schulter, tile polishing',
			image: '/Focus_Flooring_Projects/TIA_Security.jpeg',
			catagory: 'Aviation'
		},
		{
			id: 25,
			name: 'United MRO hangar at Tampa International Airport',
			size: '11K SF',
			cost: 90930,
			client: 'Haskell Company',
			scope:
				'Floor tile, wall tile, carpet tile, rubber flooring, rubber base, schluter, floor prep',
			image:
				'/Focus_Flooring_Projects/unitedtpahangar-2southwestaerial-150482.jpg',
			catagory: 'Aviation'
		},
		{
			id: 26,
			name: 'Tampa International Airport ticket level interior refurbishment',
			size: '4.2K SF',
			cost: 82380,
			client: 'DPR',
			scope: 'Carpet demo, tile demo, floor tile, schluter, crack isolation',
			image: '/Focus_Flooring_Projects/TPATicketLevelInteriorRefurbishment.png',
			catagory: 'Aviation'
		},
		{
			id: 27,
			name: 'Terminal Building 3900',
			size: '8.7K SF',
			cost: 124487,
			client: 'Reno Building',
			scope:
				'Tile demo, carpet demo, base demo, floor tile, wall tile, carpet tile, broadloam carpet, tile base, rubber base, schluter',
			image:
				'/Focus_Flooring_Projects/Terminal_Building-3900-Rehabilitation-Aviation.jpeg',
			catagory: 'Aviation'
		},
		{
			id: 28,
			name: 'Peter O Knight & Plant City airports',
			size: '500 SF',
			cost: 33458,
			client: 'Reno Building',
			scope: 'VCT and rubber base installation, moisture mitigation',
			image: '/Focus_Flooring_Projects/Peter_O_Knight_Airport.jpeg',
			catagory: 'Aviation'
		},
		{
			id: 29,
			name: 'Tampa General Hospital Physcians lounge',
			size: '5K SF',
			cost: 125000,
			client: 'Beck Group',
			scope:
				'Vinyl flooring demo, floor tile, wall tile, tile base, schluter, moisture mitigation, wood flooring, rubber base, extensive floor prep, sheet vinyl, heat weld, floor prep',
			image: '/Focus_Flooring_Projects/TGH_New_Physicians_Lounge.jpeg',
			catagory: 'Healthcare'
		},
		{
			id: 30,
			name: 'Moffitt level 3 CT scan room',
			size: '239 SY',
			cost: 13997,
			client: 'Beck-Envision',
			scope:
				'Carpet demo, base demo, sheet vinyl, heat weld, carpet tile, carpet patch/repair, vinyl base',
			image:
				'/Focus_Flooring_Projects/Moffitt_Cancer_Center-CTScanRoom-Three_StretcherLogoCleared.jpeg',
			catagory: 'Healthcare'
		},
		{
			id: 31,
			name: 'Moffitt CEP upgrade & replacement',
			size: '12K SF',
			cost: 77989,
			client: 'DPR',
			scope: 'Resilient flooring, vinyl base, floor paint',
			image: '/Focus_Flooring_Projects/Moffitt_CEP_upgrade.jpeg',
			catagory: 'Healthcare'
		},
		{
			id: 32,
			name: 'Memorial Hospital of Tampa',
			size: '1K SF',
			cost: 8390,
			client: 'Wehr Constructors',
			scope: 'Sheet vinyl, heat weld',
			image: '/Focus_Flooring_Projects/Memorial_Hospital_Tampa.jpeg',
			catagory: 'Healthcare'
		},
		{
			id: 35,
			name: 'Hillsborough County Schools flooring continuing services',
			size: 'Various Locations - SF Varies',
			cost: 1060000,
			client: 'Hillsborough County Public Schools',
			scope: 'Carpet demo, installation & maintenance',
			image: '/Focus_Flooring_Projects/HCPS.jpg',
			catagory: 'Education'
		},
		{
			id: 35,
			name: 'Jones High School',
			size: '6K SF',
			cost: 200000,
			client: 'ACY Contractors',
			scope:
				'Floor tile, wall tile, tile base, waterproofing, marble thresholds, schluter',
			image: '/Focus_Flooring_Projects/JonesHighSchool.png',
			catagory: 'Education'
		},
		{
			id: 36,
			name: 'Alonso High School',
			size: '10K SF',
			cost: 60000,
			client: 'Ajax',
			scope:
				'Floor tile, wall tile, tile base, waterproofing, marble thresholds, schluter',
			image: '/Focus_Flooring_Projects/AlonsoHighSchool.jpeg',
			catagory: 'Education'
		},
		{
			id: 37,
			name: 'High school TTT',
			size: '225K SF',
			cost: 2000000,
			client: 'CORE Construction',
			scope:
				'Floor tile, wall tile, tile base, waterproofing, marble thresholds, schluter, quartz flooring',
			image: '/Focus_Flooring_Projects/High_School_TTT.jpg',
			catagory: 'Education'
		},
		{
			id: 38,
			name: 'Elementary school D',
			size: '7K SF',
			cost: 103698,
			client: 'Allstate',
			scope:
				'Floor tile, wall tile, tile base, waterproofing, marble thresholds, schluter',
			image: '/Focus_Flooring_Projects/ElementarySchool_D.jpeg',
			catagory: 'Education'
		},
		{
			id: 39,
			name: 'Bellamy elementary school interior renovation – Phase 2',
			size: '24K SF',
			cost: 135126,
			client: 'Core',
			scope:
				'Floor tile, resilient flooring, carpet tile, tile base, rubber base, marble thresholds, schluter',
			image: '/Focus_Flooring_Projects/BellamyES.jpeg',
			catagory: 'Education'
		},
		{
			id: 40,
			name: 'East Bay High School interior renovations',
			size: '8K SF',
			cost: 64478,
			client: 'Reno Building',
			scope: 'Extensive floor prep, quartz flooring, vinyl base',
			image: '/Focus_Flooring_Projects/eastbayhs.jpg',
			catagory: 'Education'
		},
		{
			id: 41,
			name: 'Sligh Middle School Community Center',
			size: '3.8K SF',
			cost: 21640,
			client: 'Beck',
			scope:
				'Floor tile, wall tile, tile base, carpet tile, rubber flooring, LVT, rubber base, schluter, vinyl transitions, extensive floor prep',
			image: '/Focus_Flooring_Projects/Sligh_Middle_School.jpg',
			catagory: 'Education'
		},
		{
			id: 42,
			name: 'Tampa Heights Elementary School reconstruction',
			size: '7K SF',
			cost: 124324.61,
			client: 'JE Dunn',
			scope:
				'Floor tile, wall tile, restoration and installation of salvaged tile from the original building, tile base, waterproofing, crack isolation, schluter',
			image: '/Focus_Flooring_Projects/Tampa_HeightsRestoration.jpeg',
			catagory: 'Education'
		},
		{
			id: 43,
			name: 'University of South Florida St. Petersburg residence hall',
			size: '23K SF',
			cost: 500000,
			client: 'Beck Group',
			scope:
				'Floor tile, wall tile, tile base, schluter, kerdi shower system, marble thresholds',
			image: '/Focus_Flooring_Projects/EH_USFSPDavisHall_Int_10.jpg',
			catagory: 'Education'
		},
		{
			id: 44,
			name: 'Citi Tampa A1G1 Lobbies & Restrooms',
			size: '23K SF',
			cost: 500000,
			client: 'Beck Group',
			scope:
				'Floor tile, wall tile, tile base, schluter, kerdi shower system, marble thresholds',
			image: '/Focus_Flooring_Projects/Placeholder.jpg',
			catagory: 'Commercial Office & Retail'
		}
	])

	const filteredProjects = computed(() => {
		return useFilter(projects.value, catagory.value)
	})

	const catagories = computed(() => {
		const set = new Set()
		set.add('All')
		projects.value.forEach((project) => set.add(project.catagory))
		return set
	})
</script>

<template>
	<div>
		<Hero>Portfolio</Hero>
		<div class="container">
			<Sidebar>
				<div>
					<label class="sq-radio" v-for="cat in catagories">
						{{ cat }}
						<input type="radio" name="radio" v-model="catagory" :value="cat" />
						<span class="checkmark"></span>
					</label>
				</div>

				<main id="main">
					<h2>{{ catagory === 'All' ? 'Flooring Projects' : catagory }}</h2>
					<div class="projects space-y-20">
						<ProjectCard v-for="item in filteredProjects" v-bind="item" />
					</div>
				</main>
			</Sidebar>
		</div>
	</div>
</template>

<style scoped>
	.projects {
		container-type: inline-size;
	}
</style>
