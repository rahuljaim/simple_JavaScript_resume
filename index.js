
import { asideProfile, asideSkills, asideSocial } from './data.js';
import { aboutUs, experience, education } from './data.js';

let pageContact = document.querySelector(".basic-contact");

for(let i of asideProfile)
{
    let title = document.createElement("h1");
    let subtitle = document.createElement("h5");
    subtitle.textContent = i['sub-title'];
    title.textContent = i['section-title'];
    let innerSection = document.createElement("div");
    innerSection.className = "innerSection";
    let namentitle = document.createElement('div');
    namentitle.appendChild(title);
    namentitle.appendChild(subtitle);
    innerSection.appendChild(namentitle);

    for(let content of i.contents)
    {
        let sg1 = document.createElement("div");
        sg1.className = "group";
        let icon = document.createElement("i");
        icon.className = content.icon;
        icon.setAttribute("aria-hidden","true");
        let text = document.createElement("div");
        text.className = "text";
        text.textContent = content.data;
        sg1.appendChild(icon);
        sg1.appendChild(text);
        innerSection.appendChild(sg1);

    }


    pageContact.appendChild(title);
    pageContact.appendChild(subtitle);
    pageContact.appendChild(innerSection);
}

let innerProgress = document.querySelector('.skill');

for (let progress of asideSkills){
    let title1 = document.createElement('h1');
    title1.textContent=progress['section-title'];
    innerProgress.appendChild(title1);
    for(let j of progress.contents){
        let indivisual_progress = document.createElement('div');
        indivisual_progress.className = "area_of_expert";

        let skill_name = document.createElement('div');
        skill_name.className="specialization";
        skill_name.textContent=j.data;
        let pbar1 = document.createElement('progress');
        pbar1.setAttribute("value",j.progress);
        pbar1.setAttribute("max",100);
        pbar1.setAttribute("style","width:120px;");
        let pbar = document.createElement('div');
        pbar.appendChild(pbar1);
        let pval = document.createElement('div');
        pval.className="pval";
        pval.textContent = j.progress+"%";
        indivisual_progress.appendChild(skill_name);
        indivisual_progress.appendChild(pbar);
        indivisual_progress.appendChild(pval);
        innerProgress.appendChild(indivisual_progress);
        
    }   
}
let innerSocial = document.querySelector('.social');
for(let social of asideSocial){
    let title2 = document.createElement('h1');
    title2.textContent=social['section-title'];
    innerSocial.appendChild(title2);
    for(let j of social.contents){
        let individual_social = document.createElement('div');
        individual_social.className='individual-social';
        let social_icon = document.createElement('i');
        social_icon.className=j.icon;
        social_icon.setAttribute("aria-hidden", "true"); 
        let social_title_n_link = document.createElement('div');
        let social_title = document.createElement('h3');
        let social_link = document.createElement('p');
        social_title.textContent = j.data;
        social_link.textContent = j.link;
        innerSocial.appendChild(individual_social);
        individual_social.appendChild(social_icon);
        individual_social.appendChild(social_title_n_link);
        social_title_n_link.appendChild(social_title);
        social_title_n_link.appendChild(social_link);
    }

}
let about = document.querySelector('.aboutus');
for(let ab1 of aboutUs){
    let title3 = document.createElement('h2');
    title3.className='aboutus';
    title3.style.color="#00a9ff";
    title3.textContent=ab1['main-title'];
    let desc3 = document.createElement('article');
    desc3.className='about-description';
    desc3.textContent=ab1.description;
    about.appendChild(title3);
    about.appendChild(desc3);
}

let work = document.querySelector('.workexp');
for(let wo1 of experience){
    let title4 = document.createElement('h2');
    title4.className='work';
    title4.style.color="#00a9ff";
    title4.textContent=wo1['main-title'];
    work.appendChild(title4);
    for(let l of wo1.content){
        let workgroup = document.createElement('div');
        workgroup.className='workgroup';
        let yr = document.createElement('h4');
        yr.className='company-year';
        yr.textContent=l.year;
        let companyname = document.createElement('h3');
        companyname.className='company-name';
        companyname.textContent=l.com;
        let companydesc = document.createElement('p');
        companydesc.className='company-desc';
        companydesc.textContent=l.description;
        workgroup.appendChild(yr);
        workgroup.appendChild(companyname);
        workgroup.appendChild(companydesc);
        work.appendChild(workgroup);
    }
}

let edu = document.querySelector('.education');
for(let ed1 of education){
    let title5 = document.createElement('h2');
    title5.className='education';
    title5.style.color="#00a9ff";
    title5.textContent=ed1['main-title'];
    edu.appendChild(title5);
    for(let m of ed1.content){
        let edugroup = document.createElement('div');
        edugroup.className='edugroup';
        let yr1 = document.createElement('h4');
        yr1.className='education-year';
        yr1.textContent=m.year;
        let institutename = document.createElement('h3');
        institutename.className='institute-name';
        institutename.textContent=m.ins;
        let institutedesc = document.createElement('p');
        institutedesc.className='institute-desc';
        institutedesc.textContent=m.description;
        edugroup.appendChild(yr1);
        edugroup.appendChild(institutename);
        edugroup.appendChild(institutedesc);
        edu.appendChild(edugroup);
    }
}
// let hobby = document.querySelector('.hobby');
// let title6 = document.createElement('h2');
//     title6.className='hobby';
//     title6.style.color="#00a9ff";
//     title6.textContent="Hobby";

// hobby.appendChild(title6);