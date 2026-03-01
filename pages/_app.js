import Script from 'next/script'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Histats Tracking Baru - ID: 5011680 */}
      <Script 
        id="histats-script" 
        strategy="afterInteractive"
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
      
      {/* Noscript Fallback */}
      <noscript>
        <a href="/" target="_blank">
          <img src="//sstatic1.histats.com/0.gif?5011680&101" alt="histats" border="0" />
        </a>
      </noscript>

      <Component {...pageProps} />
    </>
  )
}
