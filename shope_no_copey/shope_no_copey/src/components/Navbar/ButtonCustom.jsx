import { Badge, Button, Dropdown, OverlayTrigger, Popover } from "react-bootstrap";
import { Link } from "react-router-dom";


export const BasicExample = () => {

    return (

        <>
            <OverlayTrigger
                trigger="click"
                placement='bottom'
                variant="link"
                overlay={
                    <Popover id={`popover-relative`}>
                        <Popover.Header as="h3">{`Popover bottom`}</Popover.Header>
                        <Popover.Body>
                            <strong>Holy guacamole!</strong> Check this info.
                        </Popover.Body>
                    </Popover>
                }
                style={{
                    position: 'absolute',
                    backgroundColor: 'rgba(255, 100, 100, 0.85)',
                    padding: '2px 10px',
                    color: 'white',
                    borderRadius: 3,
                  }}
            >
                <Button  variant="link">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
                        <path d="M6.667 31.667V28.875H10.125V16.5Q10.125 13.083 12.188 10.333Q14.25 7.583 17.625 6.833V5.625Q17.625 4.667 18.312 4Q19 3.333 20 3.333Q21 3.333 21.688 4Q22.375 4.667 22.375 5.625V6.833Q25.75 7.583 27.833 10.333Q29.917 13.083 29.917 16.5V28.875H33.333V31.667ZM20 19.292Q20 19.292 20 19.292Q20 19.292 20 19.292Q20 19.292 20 19.292Q20 19.292 20 19.292ZM20 36.667Q18.667 36.667 17.667 35.688Q16.667 34.708 16.667 33.333H23.333Q23.333 34.708 22.354 35.688Q21.375 36.667 20 36.667ZM12.875 28.875H27.125V16.5Q27.125 13.5 25.083 11.417Q23.042 9.333 20.042 9.333Q17.042 9.333 14.958 11.417Q12.875 13.5 12.875 16.5Z" />
                    </svg>

                    <Badge pill bg="danger" className="d-inline-block align-top ">
                        +13
                    </Badge>
                </Button>
            </OverlayTrigger>

        </>



    );
}


// {/* <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
// <path d="M6.667 31.667V28.875H10.125V16.5Q10.125 13.083 12.188 10.333Q14.25 7.583 17.625 6.833V5.625Q17.625 4.667 18.312 4Q19 3.333 20 3.333Q21 3.333 21.688 4Q22.375 4.667 22.375 5.625V6.833Q25.75 7.583 27.833 10.333Q29.917 13.083 29.917 16.5V28.875H33.333V31.667ZM20 19.292Q20 19.292 20 19.292Q20 19.292 20 19.292Q20 19.292 20 19.292Q20 19.292 20 19.292ZM20 36.667Q18.667 36.667 17.667 35.688Q16.667 34.708 16.667 33.333H23.333Q23.333 34.708 22.354 35.688Q21.375 36.667 20 36.667ZM12.875 28.875H27.125V16.5Q27.125 13.5 25.083 11.417Q23.042 9.333 20.042 9.333Q17.042 9.333 14.958 11.417Q12.875 13.5 12.875 16.5Z" />
// </svg>

// <Badge pill bg="danger" className="d-inline-block align-top ">
// +13
// </Badge> */}