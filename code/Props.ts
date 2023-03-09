import { NewUser, User } from './Type'

export type OneDocsProps = {
  image: string
  titre: string
  text: string
  size: string
  uploaded: string
  isItNew: boolean
}
export type OneNotificationProps = {
  type: 'Billing' | 'Project' | 'News' | 'Product'
}


