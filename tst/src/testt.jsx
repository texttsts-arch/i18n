import { Trans, useTranslation } from 'react-i18next'
import './App.css'
import { useState } from 'react'

function Testt() {

  const [count, setCount] = useState(0);
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [name, setName] = useState("John");

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px' }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        <input type="number" onChange={(e) => setCount(Number(e.target.value))} />
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        {name.split(' ').map((word) => t(word)).join(' ')}
      </div>
     

      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => i18n.changeLanguage('fr')}>Franxçais</button>
        <button onClick={() => i18n.changeLanguage('en')}>Engxlish</button>
        <button onClick={() => i18n.changeLanguage('ar')}>العرxبية</button>
      </div>
    </div>
  );
}

export default Testt
