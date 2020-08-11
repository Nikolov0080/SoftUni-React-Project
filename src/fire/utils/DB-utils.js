import '../fire'
import db from '../DB-refs/DB-ref'
import moment from 'moment';


export default {
    updateUser(userData, userId) {
        return db.ref('users/' + userId).set(userData);
    },
    deleteOrders(id) {
        return db.ref('orders/' + id).remove()
    },
    updateTotalSpend(currentOrderValue, username) {

        db.ref('totalSpend/usd').once('value').then((snapshot) => {
            let result = snapshot.val();
            return db.ref('totalSpend/usd').update({
                for: currentOrderValue,
                usd: currentOrderValue += +result.usd,
                lastOrderTime: moment().format('LLL'),
                username: username
            })
        });
    },

}