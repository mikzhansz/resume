// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name:{
    firstname: 'Dmitro',
    lastname: 'Ivanov',
        },
        position: "Junior Fullstack JS Developer",
        salary: "600$ в місяц", 
        address: "ukraine,kyiv,2023",
}
var footer = {
  social:{
    email:{
     text: 'dmytro@mail.com',
     href: "mailto:dmytro@mail.com",
   },
   phone:{
     text: '+380670000123',
     href: "tel:+380670000123",
   },
   linkedin:{
     href: "https://www.linkedin.com/in/dmytro-test",
     text: "Linkedin",
           },
         } ,
}




//================================================================
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    header,
    page:{
      title:"Resume/summary",
        },
    main:{
      summary:{ 
        title:'Summary',
        text:"Open-minded for new technologies, with 1 years of experience in development. Whenever I start "+                                 
        "to work on a new project I learn the domain and try to understand the idea of the project. Good team"+
        "player, every colleague is a friend to me.",
        
              },
      experience:{
        title:'Other experience',
        text :" Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics"+
        "tournament position, goals etc, analyzing by simple mathematics models and preparing probability"+
        "for such events like: money line - first win / draw / second win, totals etc.",
                       },
               
          },
        
     footer,
       
     })
})
  


// ================================================================
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
res.render('skills', {
  header,
  page:{
    title:"Resume/skills",

  },
   main:{
       skills:[
      {
        name:'html',
        point:10,
        istop:true,
      },
      {
        name:'handlebars',
        point:10,
        istop:false,
      },
      {
        name:'vs kode & npm',
        point:8,
        istop:true,
      },
      {
        name:'git & teminal',
        point:7,
      },
      {
        name:'react.js',
        point:0,
      },
      {
        name:'php',
        point:null,
      },
      
      ],
      hobbies:[
        {
          name:'painting',
          isMain:true,
        },
        {
          name:'chess',
          isMain:false,
        },
        {
          name:'traveling',
          isMain:true,
        },
        ],
      },
                
   footer,
   
   })
      })

      router.get('/education', function (req, res) {
        //             ↙ cюди вводимо назву файлу з сontainer
      res.render('education', {
        header,
        page:{
          title:"Resume/education",
      
        },
        main:{
            education:[
              {
                name:'kindergaden',
                isend:false,
              },
              {
                name:'school',
                isend:true,
              },
              {
                name:'university',
                isend:true,
              },
              {
                name:'college',
                isend:false,
              },
              {
              name:'kursi',
              isend:false,
             },
             ],
             certificates:[
              {
                name:'safety',
                id:1,
              },
              {
                name:'realiability',
                id:2,
              },
              {
                name:'quality',
                id:3,
              },
              ]
          },
                                   
         footer,
          })
            })
            router.get('/work', function (req, res) {
              //             ↙ cюди вводимо назву файлу з сontainer
            res.render('work', {
              layout: 'big',
              page:{
                title:"Resume/work",
              },
              header,
              main:{
                works:[{
                  position:'Junior Fullstack Developer',
                  company:{
                    name:"IT Brains",
                    url:' https://it-brains.com.ua/',
                  },
                  duration:{
                    from:'12.12.2023',
                    to:'12.05.2024',
                  },
                  projectAmount :3,
                  projects: [
                    {
                    name:'Resume',
                    url:' https://resume.com.ua/',
                    about:'High-Long application',
                    stackAmount:3,
                    awardAmount:2,
                    stacks:[
                      {
                        name:'react.js',
                      },
                      {
                        name:'HTML/CSS',
                      },
                      {
                        name:'Node.js',
                      },
                    ],
                    awards:[
                      {
                        name:'Background verification',
                      },
                      {
                        name:'Background verification2',
                      },
                    ],
                  },
                ],
              }],

              },   
                                
               footer,
                })
                  })


// Підключаємо роутер до бек-енду
module.exports = router
