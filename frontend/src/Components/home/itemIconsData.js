
import hostel from '../../assets/images/hostel.png'
import hotel from '../../assets/images/hotel.png'
import resturant from '../../assets/images/resturant.jpg'
import flowerPark from '../../assets/images/flowerPark.png'
import swimmingPool from '../../assets/images/swimmingPool.png'
import boysHostel from '../../assets/images/boysHostel.png'
import girlsHostel from '../../assets/images/girlsHostel.png'
import roomsForRent from '../../assets/images/roomsForRent.png'



const itemIcons = [
    {
        image: hostel,
        title: "Hostels",
        link: `/listings/search/${"hostel"}`
    },
    {
        image: hotel,
        title: "Hotels",
        link: `/listings/search/${"hotel"}`
    },
    {
        image: resturant,
        title: "Resturants",
        link: `/listings/search/${"resturant"}`
    },
    {
        image: flowerPark,
        title: "Parks",
        link: `/listings/search/${"park"}`
    },
    {
        image: swimmingPool,
        title: "Swimming Pools",
        link: `/listings/search/${"swimmingPool"}`
    },
    {
        image: boysHostel,
        title: "Boys Hostels",
        link: `/listings/search/${"boysHostel"}`
    },
    {
        image: girlsHostel,
        title: "Girls Hostels",
        link: `/listings/search/${"girlsHostel"}`
    },
    {
        image: roomsForRent,
        title: "Rooms For Rent",
        link: `/listings/search/${"roomForRent"}`
    }
]

export default itemIcons