import { faker } from '@faker-js/faker'
var cpf = require('gerador-validador-cpf')

export default {
    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: faker.phone.number('###########'),
            address: {
                postalCode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '150000',
                details: 'AP 467',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpeg'
        }
        return data
    }
}