import Mail from '../lib/Mail'

export const RegistrationMail = {
  key: 'Registrationmail',
  async handle({ data }) {
    const { user } = data

    await Mail.sendMail({
      from: 'No-Reply <limabrot879@gmail.com>',
      to: `${user.name} <${user.email}>`,
      subject: `Cadastro de usuario`,
      html: `Olá, ${user.name}, Bem vindo ao Nosso Serviço\nEle e 100% gratuito!\nDivirta-se!!!`,
    })
  },
}
