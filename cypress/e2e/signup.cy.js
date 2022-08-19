import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Signup', () => {
    it('User should be a deliver', function () {
        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })

    it('Invalid document', function () {
        var deliver = signupFactory.deliver()
        deliver.cpf = 'a1234567889XX'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('Invalid email', function () {
        var deliver = signupFactory.deliver()
        deliver.email = 'user.com.br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    context('Required fields', function () {
        const messages = [
            { field: 'Name', output: 'É necessário informar o nome' },
            { field: 'CPF', output: 'É necessário informar o CPF' },
            { field: 'Email', output: 'É necessário informar o email' },
            { field: 'Postal Code', output: 'É necessário informar o CEP' },
            { field: 'Number', output: 'É necessário informar o número do endereço' },
            { field: 'Delivery Method', output: 'Selecione o método de entrega' },
            { field: "Driver's License", output: 'Adicione uma foto da sua CNH' }
        ]

        before(function() {
            signup.go()
            signup.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function() {
                signup.alertMessageShouldBe(msg.output)
            })
        })
    })
})