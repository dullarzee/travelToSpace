const moonTab = document.querySelector('#moonTab');
const marsTab = document.querySelector('#marsTab');
const europaTab = document.querySelector('#europaTab');
const titanTab = document.querySelector('#titanTab');
const planet = document.querySelector('#planet');
const planetName = document.querySelector('#planetName');
const factsParagraph = document.querySelector('#factsParagraph');
const averageDistance = document.querySelector('#averageDistance');
const averageDistanceValue = document.querySelector('#averageDistanceValue');
const travelTime = document.querySelector('#travelTime');
const travelTimeValue = document.querySelector('#travelTimeValue');
const sectionDestination = document.querySelector('#sectionDestination');
const role = document.querySelector('#role');
const crewMember =document.querySelector('#crewMember');
const memberFact = document.querySelector('#memberFact');
const memberImage = document.querySelector('#memberImage');
const crewSpan1 = document.querySelector('#crewSpan1');
const crewSpan2 = document.querySelector('#crewSpan2');
const crewSpan3 = document.querySelector('#crewSpan3');
const crewSpan4 = document.querySelector('#crewSpan4');
const vehicleSpan1 = document.querySelector('#vehicleSpan1');
const vehicleSpan2 = document.querySelector('#vehicleSpan2');
const vehicleSpan3 = document.querySelector('#vehicleSpan3');
const vehicleName = document.querySelector('#vehicleName');
const vehicleFacts = document.querySelector('#vehicleFacts');
const vehicleImage = document.querySelector('#vehicleImage');
const hamburger = document.querySelector('#hamburger');
const mobileMenu = document.querySelector('#mobileMenu');
const closeMenu = document.querySelector('#closeMenu');
const pictureTag = document.querySelector('#pictureTag');
const homeTab = document.querySelector('#homeTab');
const destinationTab = document.querySelector('#destinationTab');
const crewTab = document.querySelector('#crewTab');
const techTab = document.querySelector('#techTab');

document.addEventListener('keypress', (e)=>{
    if(e.key === ' ' || e.key === 'Enter')
    {
        e.target.click();
    }
})

//General instruction for opening mobile menu
hamburger.addEventListener('click', ()=>{
    mobileMenu.style.display = 'block';
});
closeMenu.addEventListener('click', ()=>{
    mobileMenu.style.display = '';
});

//For homepage 
if(document.querySelector('html').querySelector('title').id === 'homePage')
{
    homeTab.style.borderBottom = '3px solid white';
    mobileTab1.style.borderRight = '3px solid white';
}

//For 'destination' page
if(document.querySelector('html').querySelector('title').id === 'DestinationPage')
{

    moonTab.style.borderBottom = '3px solid white';
    destinationTab.style.borderBottom = '3px solid white';
    mobileTab2.style.borderRight = '3px solid white';

    moonTab.addEventListener('click', ()=>{
        marsTab.style.borderBottom = '';
        europaTab.style.borderBottom = '';
        titanTab.style.borderBottom = '';
        moonTab.style.borderBottom = '3px solid white';
    
        sectionDestination.offsetHeight;
        sectionDestination.classList.toggle('animate-changingTab', false);
        sectionDestination.classList.toggle('animate-changingTab', true);
        /*const clone = sectionDestination.cloneNode(true);
        clone.querySelector('#planet').src = '/src/assets/destination/image-moon.png';
        clone.querySelector('#planetName').textContent = 'MOON';
        clone.querySelector('#factsParagraph').textContent = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.';
        clone.querySelector('#averageDistanceValue').textContent = '384,400 KM';
        clone.querySelector('#travelTimeValue').textContent = '3 DAYS';*/
    
    
        planet.src = '/assets/destination/image-moon.png';
        planetName.textContent = 'MOON';
        factsParagraph.textContent = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.';
        averageDistanceValue.textContent = '384,400 KM';
        travelTimeValue.textContent = '3 DAYS';
        
    });
    
    marsTab.addEventListener('click', ()=>{
        marsTab.style.borderBottom = '3px solid white';
        europaTab.style.borderBottom = '';
        titanTab.style.borderBottom = '';
        moonTab.style.borderBottom = '';
    



        planet.src = '/assets/destination/image-mars.png';
        planetName.textContent = 'MARS';
        factsParagraph.textContent = 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!';
        averageDistanceValue.textContent = '225 MIL. KM';
        travelTimeValue.textContent = '9 MONTHS';
    
    
    });
    
    europaTab.addEventListener('click', ()=>{
        marsTab.style.borderBottom = '';
        europaTab.style.borderBottom = '3px solid white';
        titanTab.style.borderBottom = '';
        moonTab.style.borderBottom = '';
    
        planet.src = '/assets/destination/image-europa.png';
        planetName.textContent = 'EUROPA';
        factsParagraph.textContent = 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a inter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.';
        averageDistanceValue.textContent = '628 MIL. KM';
        travelTimeValue.textContent = '3 YEARS';
    });
    
    titanTab.addEventListener('click', ()=>{
        marsTab.style.borderBottom = '';
        europaTab.style.borderBottom = '';
        titanTab.style.borderBottom = '3px solid white';
        moonTab.style.borderBottom = '';
    
        planet.src = '/assets/destination/image-titan.png';
        planetName.textContent = 'TITAN';
        factsParagraph.textContent = 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.';
        averageDistanceValue.textContent = '1.6 BIL. KM';
        travelTimeValue.textContent = '7 YEARS';
    });
}

//For 'Your Crew' page
if(document.querySelector('html').querySelector('title').id === 'crewPage')
{
    crewSpan1.style.backgroundColor = 'white';
    crewTab.style.borderBottom = '3px solid white';
    mobileTab3.style.borderRight = '3px solid white';

    crewSpan1.addEventListener('click', ()=>{
        role.textContent = 'COMMANDER';
        crewMember.textContent = 'DOUGLAS HURLEY';
        memberFact.textContent = 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.';
        memberImage.src = '/assets/crew/image-douglas-hurley.png';

        crewSpan1.style.backgroundColor = 'white';
        crewSpan2.style.backgroundColor = '';
        crewSpan3.style.backgroundColor = '';
        crewSpan4.style.backgroundColor = '';

    });


    crewSpan2.addEventListener('click', ()=>{
        role.textContent = 'MISSION SPECIALIST';
        crewMember.textContent = 'MARK SHUTTLEWORTH';
        memberFact.textContent = 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.';
        memberImage.src = '/assets/crew/image-mark-shuttleworth.png';

        crewSpan1.style.backgroundColor = '';
        crewSpan2.style.backgroundColor = 'white';
        crewSpan3.style.backgroundColor = '';
        crewSpan4.style.backgroundColor = '';
    });

    crewSpan3.addEventListener('click', ()=>{
        role.textContent = 'PILOT';
        crewMember.textContent = 'VICTOR GLOVER';
        memberFact.textContent = 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ';
        memberImage.src = '/assets/crew/image-victor-glover.png';

        crewSpan1.style.backgroundColor = '';
        crewSpan2.style.backgroundColor = '';
        crewSpan3.style.backgroundColor = 'white';
        crewSpan4.style.backgroundColor = '';
    });


    crewSpan4.addEventListener('click', ()=>{
        role.textContent = 'FLIGHT ENGINEER';
        crewMember.textContent = 'ANOUSHEH ANSARI';
        memberFact.textContent = 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ';
        memberImage.src = '/assets/crew/image-anousheh-ansari.png';

        crewSpan1.style.backgroundColor = '';
        crewSpan2.style.backgroundColor = '';
        crewSpan3.style.backgroundColor = '';
        crewSpan4.style.backgroundColor = 'white';
    });
}



//For 'technology' page
if(document.querySelector('html').querySelector('title').id === 'technologyPage')
{

    vehicleSpan1.style.backgroundColor = 'white';
    vehicleSpan1.style.borderColor = 'white';
    vehicleSpan1.style.color = 'black';
    mobileTab4.style.borderRight = '3px solid white';

    techTab.style.borderBottom = '3px solid white';
    
    vehicleSpan1.addEventListener('click', ()=>{
        vehicleSpan1.style.backgroundColor = 'white';
        vehicleSpan1.style.border = 'white';
        vehicleSpan1.style.color = 'black';
        vehicleSpan2.style.backgroundColor = '';
        vehicleSpan2.style.border = '';
        vehicleSpan2.style.color = '';
        vehicleSpan3.style.backgroundColor = '';
        vehicleSpan3.style.border = '';
        vehicleSpan3.style.color = '';

        if(window.innerWidth <= 500)
        {
            pictureTag.querySelector('source').srcset = '/assets/technology/launchVehicleMobile.jpg';
        }
        vehicleImage.src = '/assets/technology/image-launch-vehicle-portrait.jpg';
        vehicleName.textContent = 'LAUNCH VEHICLE';
        vehicleFacts.textContent = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
        


    });

    vehicleSpan2.addEventListener('click', ()=>{
        vehicleSpan1.style.backgroundColor = '';
        vehicleSpan1.style.border = '';
        vehicleSpan1.style.color = '';
        vehicleSpan2.style.backgroundColor = 'white';
        vehicleSpan2.style.border = 'white';
        vehicleSpan2.style.color = 'black';
        vehicleSpan3.style.backgroundColor = '';
        vehicleSpan3.style.border = '';
        vehicleSpan3.style.color = '';

        if(window.innerWidth <= 500)
        {
            pictureTag.querySelector('source').srcset = '/assets/technology/spacePortMobile.jpg';
        }
        vehicleImage.src = '/assets/technology/image-spaceport-portrait.jpg';
        vehicleName.textContent = 'SPACE PORT';
        vehicleFacts.textContent = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
    });

    vehicleSpan3.addEventListener('click', ()=>{
        vehicleSpan1.style.backgroundColor = '';
        vehicleSpan1.style.border = '';
        vehicleSpan1.style.color = '';
        vehicleSpan2.style.backgroundColor = '';
        vehicleSpan2.style.border = '';
        vehicleSpan2.style.color = '';
        vehicleSpan3.style.backgroundColor = 'white';
        vehicleSpan3.style.border = 'white';
        vehicleSpan3.style.color = 'black';

        if(window.innerWidth <= 500)
        {
            pictureTag.querySelector('source').srcset = '/assets/technology/capsuleMobile.jpg';
        }
        vehicleImage.src = '/assets/technology/image-space-capsule-portrait.jpg';
        vehicleName.textContent = 'SPACE CAPSULE';
        vehicleFacts.textContent = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
        
    });

}
