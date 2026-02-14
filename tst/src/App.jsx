import { Trans, useTranslation } from 'react-i18next'
import './App.css'
import { useState } from 'react'
import Testt from './testt'
function App() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");
  const [showTestt, setShowTestt] = useState(false);
  const [ns, setNs] = useState("testt");
  const { t, i18n } = useTranslation(ns);

  return (<>

    <button onClick={() => { setShowTestt(prev => !prev); setNs(prev => prev === "translation" ? "testt" : "translation") }}>Toggle</button>
    {showTestt && <Testt />}
    {!showTestt && <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px' }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        <input type="number" onChange={(e) => setCount(Number(e.target.value))} />
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        {name.split(' ').map((word) => t(word)).join(' ')}
      </div>


      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => i18n.changeLanguage('fr')}>Français</button>
        <button onClick={() => i18n.changeLanguage('en')}>English</button>
        <button onClick={() => i18n.changeLanguage('ar')}>العربية</button>
      </div>
    </div>}</>
  );
}

export default App
