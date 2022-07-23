import { useState } from "react"
import { Button } from "react-bootstrap"


export const CardButtonBasket  = () => {

    const [ stateBtn , setStateBtn ] = useState ( false )
    const stateBtnFc = () => setStateBtn( state => !state)

    return (
        <>
                             <Button
                type="button"
                className={`btn position-relative ${ stateBtn ?" bg-warning bg-gradient" : '' } `}
                variant="link"
                onClick={() => stateBtnFc()}

              >
                <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
                  <path d="M11.875 36.625Q10.583 36.625 9.667 35.708Q8.75 34.792 8.75 33.542Q8.75 32.25 9.667 31.333Q10.583 30.417 11.833 30.417Q13.125 30.417 14.042 31.333Q14.958 32.25 14.958 33.542Q14.958 34.833 14.042 35.729Q13.125 36.625 11.875 36.625ZM28.542 36.625Q27.25 36.625 26.333 35.708Q25.417 34.792 25.417 33.542Q25.417 32.25 26.333 31.333Q27.25 30.417 28.5 30.417Q29.792 30.417 30.708 31.333Q31.625 32.25 31.625 33.542Q31.625 34.833 30.708 35.729Q29.792 36.625 28.542 36.625ZM9.958 9.417 14.333 18.542H26.208Q26.208 18.542 26.208 18.542Q26.208 18.542 26.208 18.542L31.208 9.417Q31.208 9.417 31.208 9.417Q31.208 9.417 31.208 9.417ZM8.583 6.625H33.125Q34.417 6.625 34.792 7.458Q35.167 8.292 34.625 9.25L28.875 19.542Q28.458 20.292 27.708 20.792Q26.958 21.292 26.042 21.292H13.5L11.333 25.292Q11.333 25.292 11.333 25.292Q11.333 25.292 11.333 25.292H31.625V28.083H11.583Q9.792 28.083 8.958 26.75Q8.125 25.417 8.958 23.917L11.458 19.292L5.25 6.125H1.958V3.333H7.042ZM14.333 18.542H26.208Q26.208 18.542 26.208 18.542Q26.208 18.542 26.208 18.542Z" />
                </svg>
              </Button>
        </>
    )
} 