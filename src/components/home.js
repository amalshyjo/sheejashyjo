import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button , Container
  } from 'reactstrap';

export default function Home (){
    return(
        <Container>
            <div className="row p5">
                <div className="col-12 col-sm-4" >
                <Card style={{paddingbottom:"100px"}}>
                    <CardImg top width="100%" src="assets/images/Randamoozham.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Randamoozham</CardTitle>
                            <CardSubtitle>രണ്ടാമൂഴം</CardSubtitle>
                            <CardText>Randamoozham is a 1984 Malayalam novel by Indian author M. T. Vasudevan Nair, widely credited as his masterpiece. The work won the Vayalar Award, given for the best literary work in Malayalam, in 1985. It also won the Muttathu Varkey Award in 1994. The novel has been translated to multiple languages. </CardText>
                            <Link to='/onebook'><Button >Read Now</Button></Link>
                        </CardBody>
                </Card>
                </div>
                <div className="col-12 col-sm-4" >
                <Card style={{paddingbottom:"100px"}}>
                    <CardImg top width="100%" src="assets/images/entekadha.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Ente kadha</CardTitle>
                            <CardSubtitle>Kamala Suraiyya</CardSubtitle>
                            <CardText>Ente Kadha is an autobiography written by Kamala Surayya in the year 1973. She was motivated to write this as she became ill and thought will not survive. </CardText>
                            <Link to='/twobook'><Button >Read Now</Button></Link>
                        </CardBody>
                </Card>
                </div>
                <div className="col-12 col-sm-4" >
                <Card style={{paddingbottom:"100px"}}>
                    <CardImg top width="100%" src="assets/images/entekadha.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Ente kadha</CardTitle>
                            <CardSubtitle>Kamala Suraiyya</CardSubtitle>
                            <CardText>Ente Kadha is an autobiography written by Kamala Surayya in the year 1973. She was motivated to write this as she became ill and thought will not survive. </CardText>
                            <Link to='/twobook'><Button >Read Now</Button></Link>
                        </CardBody>
                </Card>
                </div>
            </div>
        </Container>
    );
}