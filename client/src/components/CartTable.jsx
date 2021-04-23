import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";
import { CartContext } from "../context/CartProvider";
import { useContext } from "react"


//material-ui import
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        table: {
            minWidth: 700,
        },

    }
}));



export default function CartTable(props) {
    const classes = useStyles();
    //usecontext to get cart current data
    const cart = useContext(CartContext);
    const cartData = cart.state


    const itemMap = (props.item === [] ? [] : props.item)
    const totalItemPrice = (itemMap.quantity * itemMap.price)


    return (
        <>

            <TableRow key={itemMap.name}>
                <TableCell>
                    <Avatar alt={itemMap.name} src={itemMap.image} variant="square" />
                </TableCell>
                <TableCell>
                    {itemMap.name}

                </TableCell>
                <TableCell align="right">{itemMap.quantity}</TableCell>
                <TableCell align="right">{itemMap.price}</TableCell>
                <TableCell align="right">{totalItemPrice}</TableCell>
                <TableCell align="right">
                    <Button onClick={() => cart.dispatch({ type: ADD_TO_CART, payload: { product: itemMap } })} color="primary">+</Button>
                    <Button onClick={() => cart.dispatch({ type: REMOVE_FROM_CART, payload: { productId: itemMap._id } })} color="primary">-</Button>
                </TableCell>

            </TableRow>

        </>
    )
}