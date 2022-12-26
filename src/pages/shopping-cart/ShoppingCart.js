import { Col, Container, Row } from "react-bootstrap"
import ShoppingCartItem from "../../components/shopping-cart-item/ShopingCartItem"
import MainButton from "../../UI/main-button/MainButton"
import classes from './ShoppingCart.module.css'


const ShoppingCart = () => {
    return (
        <Container fluid className={`main-margin-top ${classes.ShoppingCartContainer}`}>
            <Row>
                <h1 className="main-title p-0 mb-5">Shopping Cart</h1>
                <Col md={8} className="d-flex align-items-center">
                    <div className={classes.CartDetails}>
                        <div className="Items">
                            <ShoppingCartItem />
                            <ShoppingCartItem />
                            <ShoppingCartItem />
                        </div>
                    </div>
                </Col>

                <Col md={4} className={`${classes.CheckoutDetails}`}>
                    <div>
                        <h6>Number Of Products:</h6>
                        <span>5</span>
                    </div>

                    <hr />

                    <div>
                        <h6>Total:</h6>
                        <span>E£5,159.95</span>
                    </div>
                    <div className="mt-4">
                    <MainButton text="Checkout" />
                    </div>
                </Col>

                
            </Row>
        </Container>
    )
}


export default ShoppingCart