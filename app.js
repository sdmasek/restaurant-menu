const menu = [
    {
        id: 1,
        title: 'Buttermilk Pancakes',
        category: 'breakfast',
        price: '8.99',
        img: 'images/pancakes.jpg',
        desc: `Man bun tonx williamsburg la croix post-ironic shabby chic 
        vice prism truffaut vexillologist air plant.
         Crucifix raclette pickled echo park, air plant cred ennui viral.`,
    },
    {
        id: 2,
        title: 'house latte',
        category: 'drinks',
        price: '4.99',
        img: 'images/latte.jpeg',
        desc: ` Gluten-free paleo hexagon flannel. Cloud bread woke skateboard 
        listicle tumblr marfa tilde everyday carry fam banjo glossier cold-pressed
         health goth quinoa photo booth.`,
    },
    {
        id: 3,
        title: 'Farm Fresh Hash',
        category: 'breakfast',
        price: '11.99',
        img: 'images/farm-fresh-hash.jpg',
        desc: `Health goth twee locavore neutra, vape food truck listicle 3
         wolf moon prism cardigan woke plaid before they sold out. `,
    },
    {
        id: 4,
        title: 'Avacado Toast',
        category: 'lunch',
        price: '8.99',
        img: 'images/avacado-toast.jpg',
        desc: `Disrupt paleo flexitarian vegan poke synth helvetica before they 
        sold out, meggings bitters activated charcoal tumblr butcher selfies
         master cleanse.`,
    },
    {
        id: 5,
        title: 'iced cappucino',
        category: 'drinks',
        price: '5.99',
        img: 'images/iced-cappuccino.jpg',
        desc: ` Selvage tumeric tousled, lo-fi vice hoodie semiotics you probably 
        haven't heard of them vinyl pop-up next level single-origin coffee 
        vexillologist kombucha four loko.  `,
    },
    {
        id: 6,
        title: 'Vegan Chorizo Tacos',
        category: 'lunch',
        price: '10.99',
        img: 'images/chorizo-egg-tacos.jpg',
        desc: `Try-hard deep v yuccie disrupt biodiesel farm-to-table kickstarter
         quinoa. Adaptogen shoreditch etsy migas, plaid kogi waistcoat lomo.  `,
    },
    {
        id: 7,
        title: 'Loaded Oatmeal',
        category: 'breakfast',
        price: '7.99',
        img: 'images/loaded-oatmeal.jpg',
        desc: `Beard tilde stumptown chia, fam banh mi taiyaki photo booth palo santo bespoke. 
        Gastropub lomo art party, hashtag man bun pabst meh coloring book ennui listicle 
        copper mug palo santo hella iceland paleo. `,
    },
    {
        id: 8,
        title: 'Steel-toe Burger',
        category: 'lunch',
        price: '15.99',
        img: 'images/burger.jpg',
        desc: `Beard tilde stumptown chia, fam banh mi taiyaki photo booth palo santo bespoke. 
        Gastropub lomo art party, hashtag man bun pabst meh coloring book ennui listicle 
        copper mug palo santo hella iceland paleo. `,
    },
    {
        id: 9,
        title: 'Fruity French Toast',
        category: 'breakfast',
        price: '9.99',
        img: 'images/french-toast.jpg',
        desc: `Yuccie small batch palo santo, austin kale chips keytar pabst. Occupy hot chicken 
        pork belly you probably haven't heard of them hella. `,
    },
    {
        id: 10,
        title: 'Chicken & Waffles',
        category: 'lunch',
        price: '14.99',
        img: 'images/chicken-waffles.jpg',
        desc: `Cloud bread forage austin chambray skateboard helvetica gentrify etsy fanny pack. 
        Pinterest hexagon migas crucifix salvia, chicharrones pug mlkshk vaporware letterpress
         palo santo fam vexillologist.  `,
    },
    {
        id: 11,
        title: 'Pasta Entree',
        category: 'dinner',
        price: '13.49',
        img: 'images/sidebar_image',
        desc: `Yuccie small batch palo santo, austin kale chips keytar pabst. Occupy hot chicken 
        pork belly you probably haven't heard of them hella. `

    }

];

//get unique categories only
//iterate over categories return buttons
//make sure to select buttons when they are available

//get the parent container which will display all menu items
const parentSection = document.querySelector(".section-center");
// get the buttons to filter through the menu
const filterBtns = document.querySelectorAll(".filter-btn");

//load the images using Domcontentloaded

window.addEventListener("DOMContentLoaded", function () {
    displayMenu(menu);
    const categories = menu.reduce((values, item) => {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ["all"]);
    console.log(categories);
});


// loop through the buttons 
filterBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
        // create a var that points to the current category 
        let category = e.currentTarget.dataset.id;
        // create a new array to filter through menu categories
        const menuButtons = menu.filter(function (menuCategory) {
            if (menuCategory.category === category) {
                return menuCategory;
            }
        });
        if (category === 'all') {
            displayMenu(menu);
        } else {
            displayMenu(menuButtons);
        }

    });
});

// function for displaying a menu array
function displayMenu(menus) {
    let displayMenu = menus.map(function (item) {
        return `<article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title}/>
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
    </article>
       
        `;
    });

    parentSection.innerHTML = displayMenu.join("");
}