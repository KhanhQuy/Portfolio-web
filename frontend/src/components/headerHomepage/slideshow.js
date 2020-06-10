import React from 'react';
import { Slide } from 'react-slideshow-image';
import slide from 'react-slideshow-image/lib/components/slideshow/slide';
import './slideshow.css'

const slideImages = [
    'https://lh3.googleusercontent.com/wZKZ4Le1DlmxqEcZr4_hegC0-4cOZ76mbbaWLBLK7C1vjJaFWdVnYigTr7ROck6tJfNbQWtWz2lT5B20XC9qZUe3nDo-6oWoMOt8YZ_fuAg-T5U3s3vL8cca7aqh40WjjtunSCNP5m8BjDseFwdDoC1x7o_3H0tK2qI4MCULX5qv5k0dBBy-tHkrzaUQ3HM1GE6wtoetRQMIIxWDfu623K9e3Q_ZpEafD8kgkdjzucgxMr-k9Mu18MlCPc2_R9o0ZKwGcrWCXvphp-M0OKAeIFbPCPaVlf9rN4g3lMDn_ZD3_L3XDaAdeK0Qv3hhiNFi0BWSwfJER50UMdNJ3FIFAjbUvXGSqKvkAUXre6XizIr5sSS22nT4XIQ4FPITgd_1nYGbkaFk80uPTWllRPaw_6F1IbafyI6yXQFd1qfgHUVXYNpnT5gAaFddzZHrfipIl8ntV8F1S1uGFnShjoHMwK7BD68qjcKtC0DNEQgmFxMzGDdSqKEsJ3u7YmpvMlH-wJPwFd15rpAsl1gAoTVVKzDC7SpD6qPu4VdvQd2RJXDF4mZ3Dj-8m5TKWL7x9yXmmGPRQE4Uum1kkWkyXA6D-Vai2zCJtzivLgJRlP70MTO0YjA2bO2bU7wZLRH3ukZKEfAIn6qeqNyj4L3jZesAnqwGi_A2eA=w1440-h817-no',
    'https://lh3.googleusercontent.com/PKB50GGoNpM3eez3PiYg4W6LiDFUpOSwhazBCFo1VdyXR92dBEKY19nSsW3PnyCH1G-WB78k43BBhBO13MSHEqhU4VyIOxmQ-Tp0dcuoLlsp5fj5O1VtwBbkOKjsNabIDBavUAWiMz_j_fM9_C0IKCvmLrghlTe3vdDI6u8kbK3d0L3uSLDyNpImL-9rzysy4X0hDfp6QJG_jiWKe80y-tWuQXTVAV3ZslSZncW4kgnZwXmPq89EWh6f8T8QA0jaxH4uQDgJ3LLPvotIls3bMFF8JBfdIsN3ZAXRmauxmKyKeFZQgcnty5-74nNKe-ZinNawEtRiNXBtl7dM7FY4ycmI-SLJLJA07sjEY9Bbff-d-_GXxvpqkJBS9nxvrirOZTwLaI_ONCKvsEY2NcRYo6BoOsSnzfjIA1kCwESzA_eKR8N9lvw8XkljA4t7KnJMCWFTxA5QB6J7EfiWp_jLokWCWonRGBDw8Q2xmwtAKTe_ai8m0LHguvknH-2vl7pUZoytNpEl1nwnSAxfuE0SFbNy0flbMsMn769GMu0mpJMrvLfDU8FveELfxtsA50j5LnNW552GEaFPf0w24a7x1krs539z8eaTNoG-LdausqJdVKhrzY9qG8GYXWFx-7dcunzK1ZBSUPS32Ah2Em9NwGXnb8oX2A=w1440-h814-no',
    'https://lh3.googleusercontent.com/L9JlZOCrpDMYWxVBmtKIJDpSn6P8DBgwcBF3Btrcw0jjkfE4zx0x2sy8Ph2dsmFR-DGCxMeUrRR89Dy4LeA99lPXQcVdKLxRJt3HSqb-U644s82NHmF94FkSsILI2XH9Lx5MZVXaCR4xQhlx6s8JtfFXc4iO5KdFCx6bgtwnyxrg0fQ2CYfbteLSB-2po4EbOKnIwfPK_o5GlYatDYDHuvNnvS_zIHjGRhDBr-0hkOSD3pexT3JHMFulWuh41xeF8XhijrUOG4VsmYWbNJKQE96oKqLxcuAGeC70xq26O7y7ZNzipTFY93MOtOdPsSxoxIA1OIT_veIuSHexglTIIQdrPLfNvwfQ35i2284mei_oCtvuO3-WfvxUDir692-F976JH8BUIvbnIddgAzNMCwqc4sEQCFs_LFwPJxrwW3AVsFVxuSzbTZVWxnnkuapL7FDfyCrgmp9AB6mO15TQYlzOpZ9s6iXQ1rvZc_ynz6XcNbEtQWj6nD1YAWEziFdv6AE_nsTbPum-jp_btC-6CuvwIjJpq5RxOzzrotf0-Jf34eY08nafcyUxYH8V8yqMBV5Oov1TD_MnUXNVPpEqYKNiB_P87wYkf0CGL_9QStNqLnXy2SaDcN10gpiHobm1bjBPXBKJ2_SnwFd2Gc_Jqf0oPHgXvQ=w1440-h817-no'
  ];
 
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }
   
  const Slideshow = () => {
      return (
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      )
  }

  export default Slideshow