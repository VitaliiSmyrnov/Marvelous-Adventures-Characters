import { FC } from "react";

import { IconProps } from "src/modules/IProps";

export const LogoIcon: FC<IconProps> = (props) => (
  <svg fill="none" viewBox="0 0 98 16" {...props}>
    <path fill="#ED1D24" d="M0 .5h47v15H0V.5Z" />
    <path
      fill="#FAFAFA"
      d="M2 13.486V3.514h2.215l.803 5.128.79-5.128h2.256V13.5h-1.8V8.685l-.789 4.8h-.927l-.79-4.757v4.758H2Zm9.97-9.972 1.468 9.972H11.68l-.194-1.539h-1.357l-.208 1.539h-1.73l1.453-9.972h2.326Zm-.664 6.838-.499-4.188-.47 4.188h.969Zm4.182-6.838c.323 0 .627.052.913.157a2.1 2.1 0 0 1 .79.499c.23.218.42.503.567.854.157.352.259.779.305 1.282.065.618.046 1.135-.055 1.553-.093.408-.208.736-.347.983a2.092 2.092 0 0 1-.567.712l1.149 3.932H16.47l-.845-3.348-.388.071v3.277h-1.744l.014-9.972h1.98Zm-.25 4.929c.213-.019.388-.071.527-.157.138-.095.253-.213.346-.356a1.4 1.4 0 0 0 .193-.484 2.76 2.76 0 0 0 .056-.556c0-.2-.019-.394-.056-.584a1.759 1.759 0 0 0-.18-.527.981.981 0 0 0-.346-.384c-.138-.095-.318-.143-.54-.143v3.191Zm4.33-4.929.775 6.012.817-6.012h1.745l-1.537 9.972h-2.05l-1.55-9.972h1.8Zm3.446 9.972V3.514h3.254v1.767H24.8v2.25h1.482v1.852h-1.565v2.25h1.579v1.853h-3.282ZM28.557 3.5v8.19h1.495v1.81H26.84V3.514l1.717-.014Zm1.92 5c0-.75.065-1.43.194-2.037.13-.617.31-1.144.54-1.581.231-.437.513-.774.845-1.012a1.84 1.84 0 0 1 2.174 0c.332.238.614.575.844 1.012.231.437.411.964.54 1.581.13.608.194 1.287.194 2.037s-.065 1.434-.194 2.051c-.129.608-.309 1.13-.54 1.567-.23.437-.512.774-.844 1.012a1.841 1.841 0 0 1-2.174 0c-.332-.238-.614-.575-.845-1.012-.23-.437-.41-.959-.54-1.567a10.034 10.034 0 0 1-.194-2.051Zm1.717.028c0 .475.023.907.07 1.297.046.39.11.726.193 1.011.084.276.18.49.291.641.12.152.25.228.388.228s.263-.076.374-.228c.12-.152.217-.365.29-.64.084-.286.148-.623.194-1.012.046-.39.07-.822.07-1.297 0-.474-.024-.906-.07-1.296a5.913 5.913 0 0 0-.194-1.011c-.073-.276-.17-.49-.29-.641-.111-.152-.236-.228-.374-.228-.139 0-.268.076-.388.228-.11.152-.207.365-.29.64a5.904 5.904 0 0 0-.194 1.012c-.047.39-.07.822-.07 1.296Zm9.318.029c0 .332-.004.688-.013 1.068 0 .37-.024.741-.07 1.111a5.46 5.46 0 0 1-.207 1.04 2.659 2.659 0 0 1-.457.883 2.126 2.126 0 0 1-.762.599c-.314.152-.701.228-1.163.228-.637 0-1.135-.114-1.495-.342a2.08 2.08 0 0 1-.79-.969c-.166-.427-.267-.94-.304-1.538a43.586 43.586 0 0 1-.041-1.995V3.5h1.703v5.057c.009.589.046 1.111.11 1.567.028.2.065.394.111.584.046.18.102.347.166.499.074.142.153.26.236.356a.44.44 0 0 0 .304.128.49.49 0 0 0 .346-.128 1.11 1.11 0 0 0 .25-.356 2.1 2.1 0 0 0 .166-.499 5.91 5.91 0 0 0 .11-.584c.056-.456.079-.978.07-1.567V3.514h1.73v5.043Zm4.418-5.043c.01 0 .015.095.015.285v.598c0 .266-.005.565-.014.898a4.59 4.59 0 0 0-.872.085 2.763 2.763 0 0 0-.776.243 1.881 1.881 0 0 0-.554.384.759.759 0 0 0-.207.527c0 .171.06.318.18.442.129.123.281.247.456.37.185.124.384.261.596.413.221.143.42.314.595.513.185.2.337.442.457.727.13.284.194.631.194 1.04 0 .607-.11 1.13-.332 1.566a2.976 2.976 0 0 1-.886 1.069c-.37.275-.803.48-1.302.612a6.1 6.1 0 0 1-1.578.2v-1.78c.166 0 .383-.03.65-.086.268-.057.526-.152.776-.285.258-.133.48-.309.664-.527.185-.219.273-.49.263-.812 0-.162-.06-.3-.18-.413a2.37 2.37 0 0 0-.457-.357 20.39 20.39 0 0 0-.567-.384 3.658 3.658 0 0 1-.582-.513 2.883 2.883 0 0 1-.443-.74c-.11-.286-.166-.637-.166-1.055 0-.437.12-.84.36-1.21.25-.371.568-.69.956-.955a4.897 4.897 0 0 1 1.301-.627c.49-.152.974-.228 1.454-.228Zm7.774 0 1.439 9.972h-1.724l-.19-1.539H51.9l-.203 1.539H50l1.425-9.972h2.28Zm-.65 6.838-.49-4.188-.46 4.188h.95ZM56.812 3.5c.434 0 .81.085 1.126.256.317.171.588.4.814.684.227.285.412.617.557.997.145.37.258.755.34 1.154.08.399.135.803.162 1.211.036.399.054.77.054 1.111 0 .76-.077 1.4-.23 1.923-.145.522-.335.95-.57 1.282a3.25 3.25 0 0 1-.72.784 2.953 2.953 0 0 1-1.533.57h-1.669L55.17 3.5h1.642Zm.027 8.461.095-.014a.755.755 0 0 0 .245-.1c.108-.066.221-.166.339-.299.126-.133.24-.322.339-.57.108-.246.194-.555.258-.925.072-.38.108-.846.108-1.396a14.5 14.5 0 0 0-.013-.556 7.26 7.26 0 0 0-.068-.726 5.711 5.711 0 0 0-.136-.77 3.144 3.144 0 0 0-.258-.698 1.394 1.394 0 0 0-.38-.498.822.822 0 0 0-.556-.2l.027 6.752Zm5.226-8.447.76 6.012.8-6.012h1.71l-1.506 9.972H61.82L60.3 3.514h1.765Zm3.377 9.972V3.514h3.189v1.767h-1.438v2.25h1.451v1.852h-1.533v2.25h1.547v1.853h-3.216Zm3.736 0V3.514h1.696l1.452 5.157V3.514h1.737v9.972h-1.737L70.86 8.728V13.5l-1.682-.014Zm10.607-9.972v1.81h-1.71v8.162h-1.669V5.323h-1.832V3.514h5.21Zm5.906 5.043c0 .332-.005.688-.014 1.068 0 .37-.022.741-.067 1.111a5.567 5.567 0 0 1-.204 1.04c-.1.333-.249.627-.448.883a2.09 2.09 0 0 1-.746.599c-.308.152-.688.228-1.14.228-.624 0-1.112-.114-1.465-.342a2.071 2.071 0 0 1-.774-.969c-.163-.427-.262-.94-.298-1.538a44.394 44.394 0 0 1-.041-1.995V3.5h1.669v5.057c.01.589.045 1.111.109 1.567.027.2.063.394.108.584.045.18.1.347.163.499.072.142.15.26.23.356a.43.43 0 0 0 .3.128.475.475 0 0 0 .338-.128c.1-.095.181-.214.245-.356.072-.152.126-.319.162-.499.046-.19.082-.385.11-.584.053-.456.076-.978.067-1.567V3.514h1.696v5.043Zm2.349-5.043c.317 0 .615.052.896.157.29.104.547.27.773.499.226.218.412.503.556.854.154.352.254.779.299 1.282.063.618.045 1.135-.054 1.553-.09.408-.204.736-.34.983a2.075 2.075 0 0 1-.556.712l1.126 3.932h-1.736l-.828-3.348-.38.071v3.277h-1.71l.014-9.972h1.94Zm-.244 4.929c.208-.019.38-.071.515-.157.136-.095.25-.213.34-.356.09-.142.153-.304.19-.484.036-.18.054-.366.054-.556 0-.2-.018-.394-.054-.584a1.785 1.785 0 0 0-.177-.527.976.976 0 0 0-.339-.384.905.905 0 0 0-.53-.143v3.191Z"
    />
    <path
      fill="#FAFAFA"
      d="M90.275 13.486V3.514h3.189v1.767h-1.439v2.25h1.452v1.852h-1.533v2.25h1.547v1.853h-3.216Zm7.657-9.972c.01 0 .014.095.014.285v.598c0 .266-.005.565-.014.898-.28 0-.565.028-.855.085a2.67 2.67 0 0 0-.76.243 1.844 1.844 0 0 0-.542.384.767.767 0 0 0-.204.527c0 .171.059.318.177.442.126.123.275.247.447.37.181.124.376.261.584.413.217.143.411.314.583.513.181.2.33.442.448.727.127.284.19.631.19 1.04 0 .607-.109 1.13-.326 1.566a2.962 2.962 0 0 1-.868 1.069c-.362.275-.787.48-1.276.612-.488.133-1.004.2-1.546.2v-1.78c.162 0 .375-.03.637-.086.263-.057.516-.152.76-.285a2.12 2.12 0 0 0 .651-.527c.181-.219.267-.49.258-.812 0-.162-.059-.3-.176-.413a2.331 2.331 0 0 0-.448-.357 19.89 19.89 0 0 0-.556-.384 3.61 3.61 0 0 1-.57-.513 2.898 2.898 0 0 1-.434-.74c-.109-.286-.163-.637-.163-1.055 0-.437.117-.84.353-1.21a3.51 3.51 0 0 1 .936-.955 4.76 4.76 0 0 1 1.275-.627 4.7 4.7 0 0 1 1.425-.228Z"
    />
    <path
      fill="#FAFAFA"
      fillRule="evenodd"
      d="M97 1.5H51v-1h46v1Zm0 14H51v-1h46v1Z"
      clipRule="evenodd"
    />
  </svg>
);