import img1 from '@/public/Providers/logo-beetogreen_320x.png'
import img2 from '@/public/Providers/logo-bee-cycle_320x.png'
import img3 from '@/public/Providers/logo-jooll_320x.png'
import img4 from '@/public/Providers/logo-lease-a-bike_320x.png'
import img5 from '@/public/Providers/logo-beetogreen_320x.png'
import img6 from '@/public/Providers/logo-fietslease-holland_320x.png'
import img7 from '@/public/Providers/logo-hellorider_320x.webp'
import img8 from '@/public/Providers/logo-beetogreen_320x.png'
import img9 from '@/public/Providers/logo-fietslease-holland_320x.png'
import classicblack from '../public/Classic/classic-black.webp'
import classiclavender from '../public/Classic/classic-lavender.webp'
import classicfig from '../public/Classic/classic-fig.webp'
import classicsand from '../public/Classic/classic-sand.webp'
import classicclay from '../public/Classic/classic-clay.webp'

export const providersData = [
    {
        id: 1,
        country: 'France',
        desc: "If you're interested in leasing your Cowboy via Beetogreen, you can place your request with us.",
        img: img1
    },
    {
        id: 2,
        country: 'England',
        desc: "If you're interested in leasing your Cowboy via Bee.cycle, you can place your request with us.",
        img: img2
    },
    {
        id: 3,
        country: 'Denmark/Sweden',
        desc: "If you're interested in leasing your Cowboy via JOOLL, you can place your request with us.",
        img: img3
    },
    {
        id: 4,
        country: 'Belgium',
        img: img4,
        desc: "If your employer is registered with Lease a Bike, you can order by filling out a form."
    },
    {
        id: 5,
        country: 'Belgium',
        desc: "If you're interested in leasing your Cowboy via Joule, you can place your request with us.",
        img: img5
    },
    {
        id: 6,
        country: 'The Netherlands',
        desc: "Request an offer and upload it in your Cyclis tool.  Cylis will provide the purchase order and we'll place your order.",
        img: img6
    },
    {
        id: 7,
        country: 'Germany',
        img: img7,
        desc: "If your employer is registered with JobRad, you can order your Cowboy bike by filling out this form. We will then place an offer for you on the JobRad portal."
    },
    {
        id: 8,
        country: 'Nigeria',
        desc: "You can order directly with Deutsche Dienstrad by email. The team at Deutsche Dienstrad will then get in touch with our team at Cowboy to place your order.",
        img: img8
    },
    {
        id: 9,
        country: 'The Netherlands',
        desc: "If you're interested in leasing your Cowboy via Fietslease Holland, you can place your request with us.",
        img: img9
    },
]

export const categoryList = [
    {
        id: 0,
        name: 'Commute',
        href: '#commute',
    },
    {
        id: 1,
        name: 'Spare parts',
        href: '#spareparts',
    },
    {
        id: 2,
        name: 'Safety',
        href: '#safety',
    },
    {
        id: 3,
        name: 'Maintenance',
        href: '#maintenance',
    },
    {
        id: 4,
        name: 'Apparel',
        href: '#apparel',
    },
]

export const compatibilityList = [
    {
        id: 0,
        name: 'All',
    },
    {
        id: 1,
        name: 'C1',
    },
    {
        id: 2,
        name: 'C2',
    },
    {
        id: 3,
        name: 'C3',
    },
    {
        id: 4,
        name: 'Classic',
    },
    {
        id: 5,
        name: 'Cruiser',
    },
    {
        id: 6,
        name: 'Cruiser ST',
    },
]

export const testRideData = [
    {
        id: 1,
        title: 'Find a break in your day',
        subText: 'Fits your schedule anytime, any day',
        descList: ['Pick your own location', 'Choose among the Classic or Cruiser ST', 'Find a date and time that works for you']
    },
    {
        id: 2,
        title: 'Meet a test rider',
        subText: 'Local experts in your city',
        descList: ['Greets you at your location', 'Brings you the model of your choice', 'Flexible if you need to reschedule']
    },
    {
        id: 3,
        title: 'Experience it first hand',
        subText: 'Ready for you to try it yourself',
        descList: ['Learn all about Cowboy bikes', 'Mount on and feel the difference', 'Ask any question you might have']
    },
]

export const classicSection = [

    {
        id: 1,
        img: classicblack,
        alt: 'classic-black',
        color: 'bg-white',
        selectedClass: 'ring-gray-400'
    },
    {
        id: 2,
        img: classiclavender,
        alt: 'classic-lavender',
        color: 'bg-black',
        selectedClass: 'ring-gray-400'
    },
    {
        id: 3,
        img: classicfig,
        alt: 'classic-fig',
        color: 'bg-red-500',
        selectedClass: 'ring-gray-400'
    },
    {
        id: 4,
        img: classicclay,
        alt: 'classic-clay',
        color: 'bg-[#c07e72]',
        selectedClass: 'ring-gray-400'
    },
    {
        id: 5,
        img: classicsand,
        alt: 'classic-sand',
        color: 'bg-[#fff000]',
        selectedClass: 'ring-gray-400'
    },

]



export const modelData = [
    {
        id: 1,
        col1: 'Riding Position',
        col2: 'Upright riding position',
        col3: 'Active riding position',
        col4: 'Upright riding position',
    },
    {
        id: 2,
        col1: 'Rider Height',
        col2: 'Optimized for riders between 165-190 cm tall',
        col3: 'Optimized for riders between 170-195 cm tall',
        col4: 'Optimized for riders between 170-195 cm tall',
    },
    {
        id: 3,
        col1: 'Handlebar Type',
        col2: 'Curved',
        col3: 'Straight',
        col4: 'Curved',
    },
    {
        id: 4,
        col1: 'Full Bike Weight',
        col2: '19.0 kg - including battery and mudguards',
        col3: '19.4 kg - including battery and mudguards',
        col4: '19.3 kg - including battery and mudguards',
    },
    {
        id: 5,
        col1: 'Handlebar Width',
        col2: '54 cm',
        col3: '62 cm',
        col4: '57 cm',
    },
    {
        id: 6,
        col1: 'Saddle Type',
        col2: 'Sport',
        col3: 'Comfort',
        col4: 'Comfort',
    },
    {
        id: 7,
        col1: 'Pedaling Cadence',
        col2: 'Sporty with a high gear ratio 2.86 (60/21)',
        col3: 'Cruisey with the highest gear ratio 3.00 (60/20)',
        col4: 'Cruisey with a low gear ratio 2.71 (57/21)',
    },
]