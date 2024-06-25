import { getModel } from "./models/user-symbol/factory";

(async() => {
    const symbolValue = {
        symbol: 'BTC',
        value: 60000,
        userId: 1,
        when: new Date()
    }
    const result = await getModel().add(symbolValue)
})();