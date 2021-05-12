const d = document;
let $grid = d.querySelector(".grid"),
$item,
$card_flag_img,
$main = d.querySelector("main");
select_country = d.getElementById("region");

let $dark_mode = d.querySelector(".toggle-mode"),
$search_country = d.querySelector(".search-country"),
$search_county_container = d.querySelector(".search-country-container"),
input_search_country = d.getElementById("search-country"),
$btn_back_model = d.querySelector(".btn-back");

$dark_mode.addEventListener("click",()=>{
    d.body.classList.toggle("dark-mode");    
    $search_country.classList.toggle("dark-mode");
})
$btn_back_model.addEventListener("click",()=>{
    $search_country.style.left = "-200%";
    DelteChildrens($search_county_container);
})
d.addEventListener("DOMContentLoaded",()=>{
    GetAllCountries();    
    select_country.addEventListener("change",()=>{
        let countrySelected = select_country.options[select_country.selectedIndex].text;
        GetCountry(countrySelected);     
        DelteChildrens($grid);        
    });    
    input_search_country.addEventListener("keyup",(e)=>{
        if(e.key === "Enter"){
            SearchCountry(e.target.value);
            e.target.value = "";
        }
    });    
});
const DelteChildrens = (parent) =>{
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
const GetAllCountries = async() =>{
    res = await fetch('https://restcountries.eu/rest/v2/all');
    countries = await res.json();    
    countries.forEach(country => {
        $item = d.createElement("div");
        $item.classList.add("item");
        //Flag
        $card_flag_img = d.createElement("div");
        $card_flag_img.classList.add("card-flag-img");
        $card_flag_img.style.backgroundImage = `url(${country.flag})`;
        $card_flag_img.style.backgroundSize = "cover";
        $card_flag_img.style.backgroundRepeat = "no-repeat";
        
        $content_country = d.createElement("div");
        $content_country.classList.add("column");

        $card_text = d.createElement("h2");
        $card_text.classList.add("card-text");
        $card_text.innerHTML = country.name;

        $content_country.appendChild($card_text); 

        //Population Content
        $population_country = d.createElement("div");
        $population_country.classList.add("row");

        $strong_pop = d.createElement("strong");
        $strong_pop.classList.add("strong-text");
        $strong_pop.innerHTML = "Population";

        $span_pop = d.createElement("span");
        $span_pop.innerHTML = country.population;

        $population_country.appendChild($strong_pop);
        $population_country.appendChild($span_pop);

        //Region Content
        $region_country = d.createElement("div");
        $region_country.classList.add("row");

        $strong_reg = d.createElement("strong");
        $strong_reg.classList.add("strong-text");
        $strong_reg.innerHTML = "Region";

        $span_reg = d.createElement("span");
        $span_reg.innerHTML = country.region;

        $region_country.appendChild($strong_reg);
        $region_country.appendChild($span_reg);

        //Capital Content
        $capital_country = d.createElement("div");
        $capital_country.classList.add("row");

        $strong_cap = d.createElement("strong");
        $strong_cap.classList.add("strong-text");
        $strong_cap.innerHTML = "Capital";

        $span_cap = d.createElement("span");
        $span_cap.innerHTML = country.capital;

        $capital_country.appendChild($strong_cap);
        $capital_country.appendChild($span_cap);
        
        //Apend Population,Region,Capital
        $content_country.appendChild($population_country);
        $content_country.appendChild($region_country);
        $content_country.appendChild($capital_country);

        $item.appendChild($card_flag_img);        
        $item.appendChild($content_country);
        $grid.appendChild($item);
    });
}
const SearchCountry = async(nameCountry) =>{
    res = await fetch(`https://restcountries.eu/rest/v2/name/${nameCountry}`);
    countriesByName = await res.json();
    $search_country.style.left = "0";    

    countriesByName.forEach(countryByName =>{

        $flag_img_search = d.createElement("div");
        $flag_img_search.classList.add("flag-img-search");
        $flag_img_search.style.backgroundImage = `url(${countryByName.flag})`;
        $flag_img_search.style.backgroundSize = "cover";
        $flag_img_search.style.backgroundRepeat = "no-repeat";
        
        $columnCountry = d.createElement("div");
        $columnCountry.classList.add("column");

        $countryName = d.createElement("h3");
        $countryName.classList.add("card-text");
        $countryName.innerHTML = countryByName.name;

        $columnCountry.appendChild($countryName);

        //Native name
        $containerNative = d.createElement("div");
        $containerNative.classList.add("row");

        $strongNative = d.createElement("strong");
        $strongNative.classList.add("strong-text");
        $strongNative.innerHTML = "Native name:";
        
        $spanNameNative = d.createElement("span");
        $spanNameNative.innerHTML = countryByName.nativeName;

        $containerNative.appendChild($strongNative);
        $containerNative.appendChild($spanNameNative);
        
        //Population
        $containerPopulation = d.createElement("div");
        $containerPopulation.classList.add("row");

        $strongPopulation = d.createElement("strong");
        $strongPopulation.classList.add("strong-text");
        $strongPopulation.innerHTML = "Population:";

        $spanPopulation = d.createElement("span");
        $spanPopulation.innerHTML = countryByName.population;
        
        $containerPopulation.appendChild($strongPopulation);
        $containerPopulation.appendChild($spanPopulation);

        //Region
        $containerRegion = d.createElement("div");
        $containerRegion.classList.add("row");

        $strongRegion = d.createElement("strong");
        $strongRegion.classList.add("strong-text");
        $strongRegion.innerHTML = "Region:";

        $spanRegion = d.createElement("span");
        $spanRegion.innerHTML = countryByName.region;
        
        $containerRegion.appendChild($strongRegion);
        $containerRegion.appendChild($spanRegion);

        //Sub region
        $containerSubRegion = d.createElement("div");
        $containerSubRegion.classList.add("row");

        $strongSubRegion = d.createElement("strong");
        $strongSubRegion.classList.add("strong-text");
        $strongSubRegion.innerHTML = "Sub Region:";

        $spanSubRegion = d.createElement("span");
        $spanSubRegion.innerHTML = countryByName.region;
        
        $containerSubRegion.appendChild($strongSubRegion);
        $containerSubRegion.appendChild($spanSubRegion);

        //Capital
        $containerCapital = d.createElement("div");
        $containerCapital.classList.add("row");

        $strongCapital = d.createElement("strong");
        $strongCapital.classList.add("strong-text");
        $strongCapital.innerHTML = "Capital:";

        $spanCapital = d.createElement("span");
        $spanCapital.innerHTML = countryByName.capital;
        
        $containerCapital.appendChild($strongCapital);
        $containerCapital.appendChild($spanCapital);
        //Append colunCountry
        $columnCountry.appendChild($containerNative);
        $columnCountry.appendChild($containerPopulation);
        $columnCountry.appendChild($containerRegion);
        $columnCountry.appendChild($containerSubRegion);
        $columnCountry.appendChild($containerCapital);

        //ColumnExtra
        $columnExtra = d.createElement("div");
        $columnExtra.classList.add("column");        

        //Top level domain
        $containerTopLevel = d.createElement("div");
        $containerTopLevel.classList.add("row");

        $strongTopLevel = d.createElement("strong");
        $strongTopLevel.classList.add("strong-text");
        $strongTopLevel.innerHTML = "Top level domain:";
        
        $spanNameTopLevel = d.createElement("span");
        $spanNameTopLevel.innerHTML = countryByName.topLevelDomain[0];

        $containerTopLevel.appendChild($strongTopLevel);
        $containerTopLevel.appendChild($spanNameTopLevel);

        //Currencies
        $containerCurrencies = d.createElement("div");
        $containerCurrencies.classList.add("row");

        $strongCurrencies = d.createElement("strong");
        $strongCurrencies.classList.add("strong-text");
        $strongCurrencies.innerHTML = "Currencies:";
        
        $spanNameCurrencies = d.createElement("span");
        $spanNameCurrencies.innerHTML = countryByName.currencies[0].name;

        $containerCurrencies.appendChild($strongCurrencies);
        $containerCurrencies.appendChild($spanNameCurrencies);

        //Languages
        $containerLanguages = d.createElement("div");
        $containerLanguages.classList.add("row");

        $strongLanguages = d.createElement("strong");
        $strongLanguages.classList.add("strong-text");
        $strongLanguages.innerHTML = "Languages:";
        
        //$spanNameLanguages = d.createElement("span");
        //$spanNameLanguages.innerHTML = countryByName.languages[0].name;

        /*  countryByName.languages.forEach(lg =>{
            $spanNameLanguages.innerHTML = lg.name;
        });*/
        //$spanNameLanguages = d.createElement("span");
        $containerLanguages.appendChild($strongLanguages);
         for(let i = 0;i < countryByName.languages.length; i++){              
             $spanNameLanguages = d.createElement("span");                  
             $spanNameLanguages.innerHTML = countryByName.languages[i].name;;            
             $containerLanguages.appendChild($spanNameLanguages);
         }
        //Append column extra
        $columnExtra.appendChild($containerTopLevel);
        $columnExtra.appendChild($containerCurrencies);
        $columnExtra.appendChild($containerLanguages);

        $search_county_container.appendChild($flag_img_search);
        $search_county_container.appendChild($columnCountry);
        $search_county_container.appendChild($columnExtra);

        //border countries
        $border_countries = d.createElement("div");
        $border_countries.classList.add("border-countries");
        
        $border_countries_header = d.createElement("h3");
        $border_countries_header.innerHTML = "Border countries:";
        $border_countries.appendChild($border_countries_header);

        $tags_container = d.createElement("div");
        $tags_container.classList.add("row");

        $tags = d.createElement("label");
        // for(let i = 0;i < countryByName.borders.length; i++){            
        //     $tags = d.createElement("label");
        //     $tags.innerHTML = countryByName.borders[i];
        //     $tags.classList.add("tags");
        // }
        countryByName.borders.forEach(cb=>{
            $tags = d.createElement("label");
            $tags.innerHTML = cb;
            $tags.classList.add("tags");

            $tags_container.appendChild($tags);
        });
        $border_countries.appendChild($tags_container);        
        $search_county_container.appendChild($border_countries);
    });
    $search_country.appendChild($search_county_container);
}
const GetCountry = async(region) =>{        
    res = await fetch(`https://restcountries.eu/rest/v2/region/${region}`);
    regions = await res.json();    
        
    regions.forEach(reg => {

        $item = d.createElement("div");
        $item.classList.add("item");
        //Flag
        $card_flag_img = d.createElement("div");
        $card_flag_img.classList.add("card-flag-img");
        $card_flag_img.style.backgroundImage = `url(${reg.flag})`;
        $card_flag_img.style.backgroundSize = "cover";
        $card_flag_img.style.backgroundRepeat = "no-repeat";
        
        $content_country = d.createElement("div");
        $content_country.classList.add("column");

        $card_text = d.createElement("h2");
        $card_text.classList.add("card-text");
        $card_text.innerHTML = reg.name;

        $content_country.appendChild($card_text); 

        //Population Content
        $population_country = d.createElement("div");
        $population_country.classList.add("row");

        $strong_pop = d.createElement("strong");
        $strong_pop.classList.add("strong-text");
        $strong_pop.innerHTML = "Population";

        $span_pop = d.createElement("span");
        $span_pop.innerHTML = reg.population;

        $population_country.appendChild($strong_pop);
        $population_country.appendChild($span_pop);

        //Region Content
        $region_country = d.createElement("div");
        $region_country.classList.add("row");

        $strong_reg = d.createElement("strong");
        $strong_reg.classList.add("strong-text");
        $strong_reg.innerHTML = "Region";

        $span_reg = d.createElement("span");
        $span_reg.innerHTML = reg.region;

        $region_country.appendChild($strong_reg);
        $region_country.appendChild($span_reg);

        //Capital Content
        $capital_country = d.createElement("div");
        $capital_country.classList.add("row");

        $strong_cap = d.createElement("strong");
        $strong_cap.classList.add("strong-text");
        $strong_cap.innerHTML = "Capital";

        $span_cap = d.createElement("span");
        $span_cap.innerHTML = reg.capital;

        $capital_country.appendChild($strong_cap);
        $capital_country.appendChild($span_cap);
        
        //Apend Population,Region,Capital
        $content_country.appendChild($population_country);
        $content_country.appendChild($region_country);
        $content_country.appendChild($capital_country);

        $item.appendChild($card_flag_img);        
        $item.appendChild($content_country);
        $grid.appendChild($item);
    });
}