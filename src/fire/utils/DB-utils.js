import '../fire'
import db from '../DB-refs/orders'
import moment from 'moment';

export default {
    updateUser(userData, userId) {
        return db.ref('users/' + userId).set(userData);
    },
    deleteOrders(id) {
        return db.ref('orders/' + id).remove()
    },
    updateTotalSpend(currentOrderValue) {
        db.ref('totalSpend/usd').once('value').then((snapshot) => {
            let result = snapshot.val();
            return db.ref('totalSpend/usd').update({
                usd: currentOrderValue += result.usd,
                lastOrderTime: moment().format('LLL'),
                for:currentOrderValue
            })
        });
    }
}