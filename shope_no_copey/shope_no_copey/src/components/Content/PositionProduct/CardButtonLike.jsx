import { useState } from "react"
import { Button } from "react-bootstrap"


export const CardButton  = () => {

    const [ stateBtn , setStateBtn ] = useState ( false )
    const stateBtnFc = () => setStateBtn( state => !state)

    return (
        <>
                      <Button

                type="button"
                className={`btn position-relative ${ stateBtn ?" bg-danger bg-gradient" : '' } `}
                variant="link"
                onClick={() => stateBtnFc()}

              >

                <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M18.333 19.25Zm0 15.708-4.5-4.083q-3.416-3.125-5.729-5.417-2.312-2.291-3.75-4.208-1.437-1.917-2.062-3.625-.625-1.708-.625-3.625 0-3.792 2.562-6.396Q6.792 5 10.542 5q2.333 0 4.333 1.042 2 1.041 3.458 3Q19.958 7 21.917 6q1.958-1 4.208-1 3.333 0 5.625 2.167 2.292 2.166 2.917 5.291h-2.834q-.5-2.083-2.021-3.375-1.52-1.291-3.687-1.291-2.125 0-3.875 1.229t-2.917 3.437h-2q-1.166-2.166-2.937-3.416t-3.854-1.25q-2.625 0-4.354 1.771-1.73 1.77-1.73 4.437 0 1.542.625 3.042.625 1.5 2.188 3.437 1.562 1.938 4.25 4.5 2.687 2.563 6.812 6.313 1.25-1.125 2.521-2.25T23.208 27l.313.292q.312.291.667.646l.666.666.313.313q-1.042.958-2.334 2.062-1.291 1.104-2.541 2.229Zm11.959-6.625v-5.291H25v-2.75h5.292V15h2.75v5.292h5.291v2.75h-5.291v5.291Z" />
                </svg>
              </Button>
        </>
    )
} 