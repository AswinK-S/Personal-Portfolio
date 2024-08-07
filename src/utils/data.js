import frontEnd from '../../public/assets/images/frontend.png'
import backEnd  from '../../public/assets/images/backend-Icon.png'
import tools from '../../public/assets/images/tools.png'
import softSkill from '../../public/assets/images/softSkill.png'

export const SKILLS =[
    {
        title:'Frontend',
        icon:frontEnd,
        skills:[
            {skills:'HTML5',percentage:'70%'},
            {skills:'css3',percentage:'60%'},
            {skills:'JavaScript',percentage:'80%'},
            {skills:'React.js',percentage:'80%'}
        ]
    },
    {
        title:'Backend',
        icon:backEnd,
        skills:[
            {skills:'Node.js',percentage:'70%'},
            {skills:'Express.js',percentage:'75%'}
        ]
    },
    {
        title:'Tools',
        icon:tools,
        skills:[
            {skills:'Git & GitHub',percentage:'70%'},
            {skills:'Visual Studio Code',percentage:'75%'},
            {skills:'webpack',percentage:'60%'},
            {skills:'Responsive Design',percentage:'65%'}
        ]
    },
    {
        title:'Soft Skills',
        icon:softSkill,
        skills:[
            {skills:'Problem-solving',percentage:'70%'},
            {skills:'Collaboration',percentage:'75%'},
            {skills:'Attention to Detail',percentage:'70%'}
        ]
    }
    

]


export const WORK_EXPERIENCE =[
    {
        title:'Community Manager',
        date: '2021 -2022',
        responsibilities:[
            'Managing company social media',
            'customer '
        ]
    }
]