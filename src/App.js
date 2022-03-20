import * as React from "react"
import { Admin, Resource } from 'react-admin'
import polyglotI18nProvider from 'ra-i18n-polyglot'

import dataProvider from './dataProvider'
import accounts from './accounts'
import categories from './categories'
import transactions from './transactions'
import { Dashboard } from "./dashboard"
import englishMessages from './i18n/en';

const i18nProvider = polyglotI18nProvider(locale => {
  /* if (locale === 'fr') {
      return import('./i18n/fr').then(messages => messages.default);
  } */

  // Always fallback on english
  return englishMessages;
}, 'en');

const App = () => (
  <Admin dataProvider={dataProvider} i18nProvider={i18nProvider} dashboard={Dashboard}>
    <Resource name="accounts" {...accounts} />
    <Resource name="categories" {...categories} />
    <Resource name="transactions" {...transactions} />
  </Admin>
)

export default App