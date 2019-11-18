import Mock from 'mockjs';

const useMock = (isUse)=> {
    if(isUse===false){
        return false
    }
    const Random = Mock.Random
    Mock.mock('/getCourseList',{
      'course|30': [
        {
          id: () => Random.integer(1, 100),
          course_name: () => Random.ctitle(),
          'course_type|3': [() => Random.ctitle()],
          'course_introduction': () => Random.ctitle(30,50) ,
          course_difficult: '初级 ',
          course_img: () => Random.dataImage(),
          course_learn_people: () => Random.integer(1, 9999)
        }
      ]
    });
    const data = {
      'course|30': [
        {
          id: () => Random.integer(1, 100),
          course_name: () => Random.ctitle(),
          'course_type|3': [() => Random.ctitle()],
          'course_introduction': () => Random.ctitle(30,50) ,
          course_difficult: '初级 ',
          course_img: () => Random.dataImage(),
          course_learn_people: () => Random.integer(1, 9999)
        }
      ]
    }
    //console.log(34, data)
}

export default useMock