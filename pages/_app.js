import Script from 'next/script'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Histats Tracking - Menggunakan strategy lazyOnload agar tidak bentrok dengan iklan */}
      <Script 
        id="histats-script" 
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            var _Hasync= _Hasync|| [];
            _Hasync.push(['Histats.start', '1,5011680,4,0,0,0,00010000']);
            _Hasync.push(['Histats.fasi', '1']);
            _Hasync.push(['Histats.track_hits', '']);
            (function() {
              var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
              hs.src = ('//s10.histats.com/js15_as.js');
              (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
            })();
          `,
        }}
      />
      
      {/* Kita hapus noscript dari sini karena sering bikin error di Next.js */}
      {/* Statistik akan tetap tercatat lewat script di atas */}

      <Component {...pageProps} />
    </>
  )
}
