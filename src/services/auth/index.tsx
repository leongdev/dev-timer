import axios from 'axios'
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'

WebBrowser.maybeCompleteAuthSession()
type AuthResponse = {
  params: {
    access_token: string
  },
  type: string
}

interface ISignInformation {
  name: string,
  email: string,
  id: string,
  provider: string
}

// @ts-ignore
export async function handleGoogleSignIn (): Promise<ISignInformation> {
  try {
    const CLIENT_ID = '870941080137-5ur4aqokf7qm7j423ogm07nmsrasocos.apps.googleusercontent.com'
    const REDIRECT_URI = 'https://auth.expo.io/@leongdev/dev-timer'
    const SCOPE = encodeURI('profile email')
    const RESPONSE_TYPE = 'token'

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

    const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse

    if (type === 'success') {
      const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`)
      const user = await response.json()
      const { id, email, name } = user

      console.log('NAME=> ', name)
      console.log('ID=> ', id)
      console.log('EMAIL=> ', email)
      console.log('PROVIDER=> ', 'google')

      return {
        name,
        id,
        email,
        provider: 'google'
      }
    }
  } catch (e) {
    console.log(e)
    return {
      name: '',
      id: '',
      email: '',
      provider: ''
    }
  }
}

// @ts-ignore
export async function handleGithubSignIn (): Promise<ISignInformation> {
  try {
    const CLIENT_ID = '6f5c19dfb8e2b7e46099'
    const CLIENT_SECRET = 'a2e9a3f757fac00e3e9cc80c24ecba86f741c5c5'
    const REDIRECT_URI = 'https://auth.expo.io/@leongdev/dev-timer'
    const SCOPE = encodeURI('identity')
    const RESPONSE_TYPE = 'token'

    const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

    const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse

    console.log('TYPE', type)
    if (type === 'success') {
      const { code } = params
      const { data } = await axios.post('https://github.com/login/oauth/access_token', {
        code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_url: REDIRECT_URI,
        Accept: 'application/json'
      })

      const token = data.split('=')[1].split('&')[0]
      const response = await fetch('https://api.github.com/user', {
        headers: {
          Authorization: `Token ${token}`
        }
      })

      const { name, id, email } = await response.json()
      console.log('NAME=> ', name)
      console.log('ID=> ', id)
      console.log('EMAIL=> ', email)
      console.log('PROVIDER=> ', 'github')
      return {
        name,
        id,
        email,
        provider: 'github'
      }
    }
  } catch (e) {
    console.log('ERROR GITHUB=> ', e)
    return {
      name: '',
      id: '',
      email: '',
      provider: ''
    }
  }
}
