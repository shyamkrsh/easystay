
import hostel from '../../assets/images/hostel.png'
import hotel from '../../assets/images/hotel.png'
import resturant from '../../assets/images/resturant.png'
import flowerPark from '../../assets/images/flowerPark.png'
import swimmingPool from '../../assets/images/swimmingPool.png'
import boysHostel from '../../assets/images/boysHostel.png'
import girlsHostel from '../../assets/images/girlsHostel.png'
import roomsForRent from '../../assets/images/roomsForRent.png'



const itemIcons = [
    {
        image: hostel,
        title: "Rooms near NGP Patna-13",
        link: `/listings/search/${"roomsForCollege"}`,
        content: 'Search for rooms near NGP',
    },
    {
        image: hostel,
        title: "Hostels",
        link: `/listings/search/${"hostel"}`,
        content: 'Here you can search for Hostel related services',
    },
    {
        image: hotel,
        title: "Hotels",
        link: `/listings/search/${"hotel"}`,
        content: 'Here you can search for Hotels related services',
    },
    {
        image: resturant,
        title: "Resturants",
        link: `/listings/search/${"resturant"}`,
        content: 'Here you can search for Resturants related services',
    },
    {
        image: flowerPark,
        title: "Parks",
        link: `/listings/search/${"park"}`,
        content: 'Here you can search for Parks related services',
    },
    {
        image: swimmingPool,
        title: "Swimming Pools",
        link: `/listings/search/${"swimmingPool"}`,
        content: 'Here you can search for Swimming Pools related services',
    },
    // {
    //     image: boysHostel,
    //     title: "Boys Hostels",
    //     link: `/listings/search/${"boysHostel"}`,
    //     content: 'Here you can search for Hostel related services',
    // },
    // {
    //     image: girlsHostel,
    //     title: "Girls Hostels",
    //     link: `/listings/search/${"girlsHostel"}`,
    //     content: 'Here you can search for Hostel related services',
    // },
    {
        image: roomsForRent,
        title: "Rooms For Rent",
        link: `/listings/search/${"roomForRent"}`,
        content: 'Here you can search for Rooms For Rent related services',
    }
]

export default itemIcons