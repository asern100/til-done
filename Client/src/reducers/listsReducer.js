const initialState = [
     {
        id: "list-0",
        cards: [
            {title:"somthing-0"},
            {title:"anyOne-0"},
        ],
        title: "myFirstList",
        board: "board-0"
    },
     {
        id: "list-1",
        cards: [
            {title:"somthing-1"},
            {title:"anyOne-1"},
        ],
        title: "mySecondList",
        board: "board-0"
    },
    {
        id: "list-2",
        cards: [
            {title:"somthing-2"},
            {title:"anyOne-2"},
        ],
        title: "myThirdList",
        board: "board-0"
    }
];

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default listsReducer;
