import * as actionTypes from "./shopping-types";
const INITIAL_STATE = {
  products: [
    {
        "id": 1,
        "name": "Raptors Jersy 2022/23",
        "slug": "Beverly Lynch",
        "price": 5000,
        "description": "Eos facilis et est exercitationem reiciendis. Fuga voluptatem sint nostrum deserunt totam nobis sunt et.",
        "quantity": "Mrs. Allie Heathcote III",
        "image": "https://media.bleacherreport.com/image/upload/w_800,h_533,c_fill/v1635774603/j2l6jcq4aq6cqbzqrtyy.jpg",
        "featured": 0,
        "created_at": "2022-10-10T00:52:11.000000Z",
        "updated_at": "2022-10-10T00:52:11.000000Z"
    },
    {
        "id": 2,
        "name": "Brooklyn Jersy 2022/23",
        "slug": "Theodora Padberg",
        "price": 12220,
        "description": "Delectus deserunt quia accusamus odio. Voluptatem sit omnis tempora minima dolor vel. Saepe tenetur velit ut eos.",
        "quantity": "Kaycee Hyatt",
        "image": "https://i.insider.com/61814a881037b10018155943?width=1000&format=jpeg&auto=webp",
        "featured": 1,
        "created_at": "2022-10-10T00:52:11.000000Z",
        "updated_at": "2022-10-10T00:52:11.000000Z"
    },
    {
        "id": 3,
        "name": "Hornets Jersy 2022/23",
        "slug": "Camron Dare",
        "price": 14520,
        "description": "Ad consequatur non et quia. Voluptatem omnis optio reiciendis aspernatur nisi eos autem aperiam. Nihil nostrum iste fugit qui.",
        "quantity": "Dr. Sidney Cummings",
        "image": "https://cdn.nba.com/manage/2021/12/lamelo-ball-hornets-jersey-cropped.jpg",
        "featured": 0,
        "created_at": "2022-10-10T00:52:11.000000Z",
        "updated_at": "2022-10-10T00:52:11.000000Z"
    },
    {
        "id": 4,
        "name": "Lakers Jersy 2022/23",
        "slug": "Graham Lakin",
        "price": 12230,
        "description": "Nihil et eos et explicabo delectus. Sint ut impedit reprehenderit velit earum. Voluptatem possimus iusto sint repellendus suscipit qui.",
        "quantity": "Lance Marks",
        "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/019acd9b-fd80-4ddd-902d-4b96e28a0671/lebron-james-lakers-nba-swingman-jersey-GTRSXs.png",
        "featured": 0,
        "created_at": "2022-10-10T00:52:11.000000Z",
        "updated_at": "2022-10-10T00:52:11.000000Z"
    },
    {
        "id": 5,
        "name": "Trailblazers Jersy 2022/23",
        "slug": "Taya Dickens",
        "price": 15530,
        "description": "Odit voluptatem libero odio exercitationem iure. Soluta illum non iure placeat voluptate molestias rerum laudantium. Architecto ea non voluptatem cupiditate delectus.",
        "quantity": "Carolina Pouros",
        "image": "https://s3.amazonaws.com/nikeinc/assets/105518/PortlandTrailblazers_FINAL_square_1600.jpg?1635546589",
        "featured": 0,
        "created_at": "2022-10-10T00:52:11.000000Z",
        "updated_at": "2022-10-10T00:52:11.000000Z"
    },
    {
        "id": 6,
        "name": "KD 15 \"Light Lemon Twist\"",
        "slug": "Carlos Morar",
        "price": 29000,
        "description": "Culpa quos rerum omnis earum aut sed iste. Illo soluta fuga laboriosam quisquam recusandae repellat nulla. Nulla nemo et quidem eveniet vel voluptas.",
        "quantity": "Dr. Annabelle Lakin",
        "image": " https://sneakernews.com/wp-content/uploads/2022/04/Nike-KD-15-DM1056-700-4.jpg",
        "featured": 1,
        "created_at": "2022-10-10T00:52:11.000000Z",
        "updated_at": "2022-10-10T00:52:11.000000Z"
    }
],
  cart: [],
  currentItem: null,

  //
loading:true,
error:'',
  //
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case actionTypes.ADD_TO_CART:
      //get the items data the products array
      const item=state.products.find(prod=>prod.id===action.payload.id)
      //check if the item is in cart already
      const inCart=state.cart.find(item=>item.id===action.payload.id?true:false);
      return {
        ...state,
        cart:inCart?state.cart.map(item=>item.id===action.payload.id?{...item,qty:item.qty+1}:item):[...state.cart,{...item,qty:1}]
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart:state.cart.filter(item=>item.id!==action.payload.id)
      };
      case actionTypes.EMPTY_CART:
      return {
        ...state,
        cart:state.cart.filter(item=>item.id===-1)
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart:state.cart.map(item=>item.id===action.payload.id?{...item,qty:+action.payload.qty}:item)
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem:action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;