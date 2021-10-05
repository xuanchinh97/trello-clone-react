export const initialData = {
    boards: [
        {
            id: "board-1",
            columnOrder: ["column-1", "column-2", "column-3"],
            columns: [
                {
                    id: "column-1",
                    board: "board-1",
                    title: "to do column",
                    cardOrder: ["card-1", "card-2", "card-3"],
                    cards: [
                        {
                            id: "card-1",
                            boardId: "board-1",
                            columnId: "column-1",
                            title: "titel of card 1",
                            cover: "https://i.pinimg.com/236x/5b/5f/09/5b5f092862ad89c5d865f40647fba118.jpg"
                        },
                        {
                            id: "card-2",
                            boardId: "board-2",
                            columnId: "column-2",
                            title: "titel of card 2",
                            cover: null
                        },
                        {
                            id: "card-3",
                            boardId: "board-3",
                            columnId: "column-3",
                            title: "titel of card 3",
                            cover: null
                        }
                    ]
                },
                 {
                    id: "column-2",
                    board: "board-1",
                    title: "improgress column",
                    cardOrder: ["card-4", "card-5", "card-6"],
                    cards: [
                        {
                            id: "card-4",
                            boardId: "board-4",
                            columnId: "column-4",
                            title: "titel of card 4",
                            cover: null
                        },
                        {
                            id: "card-5",
                            boardId: "board-5",
                            columnId: "column-5",
                            title: "titel of card 5",
                            cover: null
                        },
                        {
                            id: "card-6",
                            boardId: "board-6",
                            columnId: "column-6",
                            title: "titel of card 6",
                            cover: null
                        }
                    ]
                },
                {
                    id: "column-3",
                    board: "board-1",
                    title: "sucsses",
                    cardOrder: ["card-7", "card-8", "card-9"],
                    cards: [
                        {
                            id: "card-7",
                            boardId: "board-7",
                            columnId: "column-7",
                            title: "titel of card 7",
                            cover: null
                        },
                        {
                            id: "card-8",
                            boardId: "board-8",
                            columnId: "column-8",
                            title: "titel of card 8",
                            cover: null
                        },
                        {
                            id: "card-9",
                            boardId: "board-9",
                            columnId: "column-9",
                            title: "titel of card 9",
                            cover: null
                        }
                    ]
                }
            ]
        }
    ]
}