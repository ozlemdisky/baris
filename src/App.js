import React from 'react';

const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <header style={{ backgroundColor: '#E68FAC', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white' }}>

        <h1 style={{ fontSize: '2.5rem' }}>LOVELANDIN</h1>
        <p style={{ color: '#FFFF', marginBottom: '2.5rem', fontSize:'1.5rem' }}>
          Zehrosla hemen barışmak için aşağıdaki butona tıklayabilirsiniz.
        </p>
        <button
          onClick={() => {
            const whatsappNumarasi = '905520013027';
            const message = 'selam zehlos... barışmak için iletişime geçmek istiyorum.';
            window.location.href = `https://api.whatsapp.com/send?phone=${whatsappNumarasi}&text=${encodeURIComponent(message)}`;
          }}
          style={{ backgroundColor: '#4caf50', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.25rem', cursor: 'pointer', transition: 'background-color 0.3s' }}
        >
         BARISBARISBARIS
        </button>
      </header>
    </div>
  );
};

export default App;
