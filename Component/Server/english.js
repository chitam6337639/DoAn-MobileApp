export const ENGLISH =
    [
        {
            id: 0,
            name:'Lesson 1',
            question:'What is a cat',
            answear:'Con meo'
        },
        {
            id: 1,
            name:'Lesson 2',
            question:'What is a dog',
            answear:'Con cho'
        },
        {
            id: 2,
            name:'Lesson 3',
            question:'What is a Nguyen Cao Thang',
            answear:'Con cac'
        },
        {
            id: 3,
            name:'Lesson 4',
            question:'What is teacher mean?',
            answear:'Giao vien'
        },
        {
            id: 4,
            name:'Lesson 5',
            question:'What is Nguyen Chi Tam?',
            answear:'Con bao'
        }
    ];


    export const addLesson = (lesson) => {
        return [...ENGLISH, lesson];
      };