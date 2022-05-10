import {v4 as uuidv4} from 'uuid';
import { createContext, useState } from 'react';

const FeedBackContext = createContext()

export const FeedBackProvider = ({children}) => {
    const [feedback, setFeedback] = useState ([
        {
            id:1,
            text: 'This is feedback item 1',
            rating: 10,
        },
        {
            id:2,
            text: 'This is feedback item 2',
            rating: 9,
        },
        {
            id:3,
            text: 'This is feedback item 3',
            rating: 7,
        },
    ])
    // Add feedbcak
    const  [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // Delete feeback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    //Update feedback item
    const updateFeddback = (id, upItem) => {
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...upItem} : item))
    }
    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }
    
   
    return ( 
    <FeedBackContext.Provider value={{
        feedback,
        feedbackEdit, //state
        deleteFeedback,
        addFeedback,
        editFeedback, //function
        updateFeddback
        
    }}>
        {children}
        </FeedBackContext.Provider>
)
    }



export default FeedBackContext;
