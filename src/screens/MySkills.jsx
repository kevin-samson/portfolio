import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

import React from "react";

const MySkills = () => {
  const isAboveMediumScreen = useMediaQuery({ query: "(min-width: 1060px)" });
  return (
    <section
      id="skills"
      className="pt-1 pb-24 w-full 
    "
    >
      <div className=" flex flex-col px-3 md:flex md:justify-between space-y-4 mt-32 md:flex-col">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-5xl md:text-6xl mb-5 font-roboto font-semibold">
            My <span className="text-blue">Skills ⚡</span>
          </p>

          <p className="text-2xl md:w-[1000px]">
            These are the skills I use to bring my ideas to life.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex flex-col md:flex-row md:justify-between md:space-x-36"
        >
          <div className="md:w-1/2 mt-10">
            <div className="flex flex-col space-y-11">
              <h4 className="text-center text-3xl text-bold">Technologies</h4>
              <div className="mt-10 md:mt-0 grid md:grid-rows-3 md:grid-cols-4 grid-rows-3 grid-cols-3 gap-10 md:gap-16">
                <svg
                  className=" fill-current text-[#E44D26] transition duration-500 hover:scale-150"
                  viewBox="0 0 128 128"
                >
                  <path d="M19.569 27l8.087 89.919 36.289 9.682 36.39-9.499L108.431 27H19.569zM91.61 47.471l-.507 5.834L90.88 56H48.311l1.017 12h40.54l-.271 2.231-2.615 28.909-.192 1.69L64 106.964v-.005l-.027.012-22.777-5.916L39.65 84h11.168l.791 8.46 12.385 3.139.006-.234v.012l12.412-2.649L77.708 79H39.153l-2.734-30.836L36.152 45h55.724l-.266 2.471zM27.956 1.627h5.622v5.556h5.144V1.627h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.513V1.627z"></path>
                </svg>

                <svg
                  className="hover:scale-150 transition duration-500"
                  viewBox="0 0 128 128"
                >
                  <path
                    d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                    fill="#38b2ac"
                  ></path>
                </svg>

                <svg
                  className="hover:scale-150 transition duration-500"
                  viewBox="0 0 128 128"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#4FAA41"
                    d="M82.803 34.23c-2.604-8.108-6.781-15.284-12.667-21.459-1.488-1.562-3.142-2.993-4.18-4.936-.656-1.23-1.281-2.477-1.92-3.715l-.406-1.021-.113.402c-.053 2.02-1.197 3.389-2.621 4.668-1.604 1.438-3.096 3-4.636 4.509l-4.736 6.229-3.829 7.042-2.561 6.915-.077.107c-1.409 4.629-2.104 9.389-2.445 14.195-.129 1.807.019 3.639.12 5.455.145 2.596.596 5.147 1.272 7.66 2.457 9.126 7.444 16.695 14.263 23.127 1.266 1.195 2.635 2.282 3.956 3.418l.585 2.008.544 3.116.26 3.253c-.003.66-.03 1.323.009 1.981.011.169.231.325.355.487l1.104.388 1.149.447-.197-2.891-.009-2.848.397-4.338.288-.944.825-1.461c1.018-.818 2.109-1.562 3.036-2.473 1.677-1.647 3.351-3.317 4.852-5.122a38.489 38.489 0 004.969-7.636c.899-1.833 1.747-3.703 2.448-5.618.618-1.688 1.001-3.463 1.488-5.2l.128-.375c1.005-4.688 1.174-9.424.805-14.19-.297-3.841-1.2-7.548-2.456-11.18zm-19.9 50.275c.154-.771.345-1.538.484-2.312-.139.774-.329 1.541-.484 2.312zm3.417.532l-.646-1.415.646 1.415.949.811-.949-.811zm40.154 17.927c-.826-1.583-2.038-2.785-3.64-3.574-1.342-.66-2.785-.95-4.269-.992-1.112-.032-2.228.025-3.342.039-.989.012-1.979.029-2.968.02-1.163-.012-2.326-.047-3.489-.08-.193-.006-.33.033-.42.229-.141.305-.308.599-.481.933l.194.062c.577.102 1.157.189 1.731.304.738.147 1.07.571 1.104 1.193.05.886.07 1.774.067 2.662-.015 3.514-.04 7.028-.066 10.541-.002.232-.006.474-.069.692-.073.252-.152.578-.34.702a2.907 2.907 0 01-1.115.425c-.561.092-.655.117-.83.669l-.076.276c-.084.301-.039.36.275.363 1.802.02 3.603.059 5.404.053 1.643-.006 3.286.094 4.923-.215 1.547-.291 2.991-.801 4.309-1.664 1.71-1.121 2.94-2.619 3.589-4.574.524-1.579.641-3.19.463-4.841a8.928 8.928 0 00-.954-3.223zm-3.157 9.661c-.964 1.794-2.402 2.992-4.457 3.308-1.287.197-2.576.14-3.803-.347-.777-.308-1.066-.979-1.09-1.772a82.426 82.426 0 01-.033-2.332c-.004-2.734-.004-5.468 0-8.201.002-.861.017-1.724.031-2.586.01-.606.137-.809.728-.858 2.596-.218 5.073.062 7.13 1.889 1.272 1.13 1.996 2.571 2.297 4.226.125.69.163 1.396.241 2.096-.063 1.598-.279 3.153-1.044 4.577zm21.789-2.961c-.512-1.246-1.482-2.027-2.701-2.527-.416-.171-.845-.312-1.294-.478l.157-.1c.485-.311 1.025-.562 1.443-.945 1.016-.931 1.438-2.102 1.24-3.493-.188-1.323-.848-2.294-2.027-2.924-1.07-.57-2.224-.778-3.418-.777-2.066.002-4.133.033-6.199.037-.712.001-1.424-.052-2.136-.062-.138-.002-.343.033-.402.125-.163.25-.271.538-.387.816-.067.162-.001.251.184.275.497.068.993.153 1.491.227.688.103 1.021.461 1.063 1.154l.009.411c.001 2.155.008 4.31-.001 6.465a926.932 926.932 0 01-.061 6.456c-.003.271-.04.543-.079.812-.059.406-.276.686-.692.774l-1.177.232c-.139.028-.34.024-.397.11-.216.323-.39.676-.366 1.102l.121.033 3.953.097.793-.003c1.368-.016 2.738.011 4.104-.059 1.479-.074 2.868-.513 4.152-1.268 1.367-.805 2.419-1.866 2.793-3.462.24-1.019.241-2.044-.166-3.028zm-10.043-9.181c.006-.433.197-.621.627-.632 1.059-.029 2.111-.023 3.133.342 1.322.472 2.135 1.612 2.12 3.005-.007.535.001 1.065-.196 1.579-.389 1.012-1.135 1.546-2.193 1.65-.552.056-1.109.062-1.601.088l-1.642-.072c-.218-.008-.313-.104-.312-.328l.064-5.632zm6.806 13.494c-.529 1.151-1.493 1.756-2.7 1.966a6.823 6.823 0 01-2.892-.127c-.706-.181-.994-.748-1.135-1.377-.095-.421-.079-.922-.087-1.36-.013-.676-.003-2.079-.003-2.079h-.014c0-1 .003-1.866-.003-2.825-.001-.207.034-.31.287-.302.898.027 1.799.042 2.697.077.803.031 1.555.269 2.262.65 1.076.58 1.724 1.468 1.902 2.688.136.925.078 1.835-.314 2.689zm-98.587 1.078l.019-5.437c.003-.818-.101-1.62-.369-2.396-.739-2.137-2.777-3.11-4.899-2.343-.965.349-1.83.878-2.656 1.478-.481.35-.481.35-.829-.149-.985-1.412-2.392-1.895-4.03-1.374-1.059.336-1.985.911-2.862 1.579-.082.062-.247.131-.296.094-.082-.061-.139-.206-.137-.315l.06-.966c.005-.203-.034-.407-.054-.62-.396.137-.712.274-1.043.354-1.023.25-2.053.48-3.082.715-.249.057-.512.132-.536.418-.025.281.246.328.456.412.442.178.881.367 1.318.559.367.162.504.455.502.849-.007 1.685.004 3.368-.006 5.053-.004.685-.036 1.369-.067 2.054-.028.607-.235.861-.823 1.014-.312.082-.629.137-.943.211-.069.016-.187.06-.188.094-.013.297-.029.601.021.89.01.052.324.052.498.072l.117-.007c1.212-.018 2.424-.037 3.637-.05.643-.007 1.285-.001 1.983-.001l.075-.97c-.4-.073-.757-.128-1.109-.205-.549-.12-.783-.411-.797-.965l-.01-.793c-.006-2.057-.014-4.113-.014-6.17 0-.299.124-.536.387-.715.557-.376 1.145-.675 1.796-.842 1.372-.351 2.562.137 3.09 1.304.167.368.298.775.335 1.175.194 2.062.11 4.126-.007 6.188-.025.445-.234.669-.673.778l-1.032.218c-.083.021-.204-.035-.21.034-.023.285-.01.722-.01.722h.246l3.142.103c.861-.002 1.723.102 2.583.124.154.003.291.026.3-.152a8.492 8.492 0 00-.011-.829l-.164-.029-.885-.199c-.597-.141-.803-.368-.805-.972-.007-1.489.013-2.977 0-4.465a45.225 45.225 0 00-.095-2.551c-.015-.226.02-.374.2-.501a5.311 5.311 0 011.732-.835c1.935-.51 3.519.551 3.619 2.546.098 1.924.057 3.855.042 5.783-.005.671-.227.874-.888 1.054l-.228.059c-.677.162-.671.162-.631.881.013.225.075.283.315.277 1.379-.031 2.758-.039 4.137-.051.564-.005 1.128 0 1.742 0l.125-.936c-.539-.143-1.036-.249-1.516-.406-.424-.144-.574-.4-.572-.848zm47.489-8.241c.568-.527.572-1.223.413-1.996-.45.471-.954.688-1.529.729-.771.055-1.528-.012-2.246-.319-1.942-.834-3.854-.775-5.76.14-1.603.768-2.589 1.965-2.688 3.78-.063 1.163.155 2.264.931 3.189.465.554 1.062.913 1.735 1.161.29.107.312.245.069.43a7.01 7.01 0 01-.557.38 73.2 73.2 0 01-1.226.754c-.241.146-.323.332-.244.617.231.838.826 1.322 1.57 1.675l.271.189-.237.237c-.729.591-1.487 1.149-2.185 1.776-.586.527-.775 1.233-.598 2.012.357 1.555 1.388 2.517 2.851 2.959 2.557.774 4.958.33 7.147-1.185 1.298-.899 2.229-2.069 2.512-3.679.317-1.809-.688-3.379-2.487-3.703-1.19-.216-2.408-.278-3.612-.416-.562-.064-1.132-.102-1.679-.231-.465-.11-.696-.489-.653-.859.043-.364.43-.703.873-.738.892-.072 1.766-.211 2.588-.587 2.178-.996 3.189-2.74 2.936-5.088-.033-.316-.105-.628-.17-.996.697.117 1.41.294 1.975-.231zm-6.609 11.017c.886.026 1.894.081 2.868.366.857.25 1.562.688 1.77 1.645.251 1.156-.305 2.306-1.424 2.924-1.048.578-2.186.626-3.34.507-.988-.102-1.877-.444-2.589-1.174-.938-.961-.943-2.291-.004-3.249.839-.856 1.288-1.033 2.719-1.019zm2.217-6.962c-.516 1.651-2.018 1.879-3.195 1.351-1.003-.449-1.44-1.333-1.669-2.342-.089-.388-.11-.791-.162-1.188.021-.569.115-1.115.36-1.627.751-1.577 2.596-1.483 3.617-.769.438.306.743.722.934 1.215a4.998 4.998 0 01.115 3.36zm-9.37 5.263a7.984 7.984 0 01-1.057-.236c-.608-.186-.682-.3-.689-.943-.018-1.792-.03-3.584-.05-5.375-.01-.806-.106-1.601-.353-2.371-.65-2.03-2.641-3.12-4.633-2.521-1.104.333-2.052.952-2.935 1.679l-.322.247.001-.331c.021-.381.062-.762.059-1.143-.002-.199-.078-.399-.115-.574-.753.227-1.428.455-2.117.629-.691.174-1.396.292-2.095.434-.347.07-.602.28-.596.519.009.337.288.402.532.503.442.181.883.364 1.32.558.312.139.439.397.436.732-.022 2.329-.036 4.659-.07 6.989-.01.736-.196.93-.92 1.092l-.316.063c-.67.115-.689.142-.643.849l.004.117c-.008.272.111.36.391.357 1.78-.021 3.561-.031 5.341-.024.763.003.845-.057.829-.841l-.036-.337c-.436-.073-.853-.126-1.261-.216-.427-.095-.58-.27-.62-.704-.037-.397-.049-.8-.053-1.2-.02-1.831-.036-3.662-.045-5.492-.002-.461.083-.889.507-1.186a4.14 4.14 0 012.125-.762c1.588-.109 2.795.832 2.881 2.415.106 1.953.074 3.913.099 5.87.002.146-.024.293-.044.438-.038.286-.178.501-.468.575-.283.074-.57.14-.859.184-.431.064-.44.061-.473.496l.011.293c.051.506.052.491.564.486 1.722-.014 3.443-.023 5.164-.021.72.002.771-.032.777-.774l-.002-.176c.011-.19-.074-.267-.269-.298zm24.052-11.323c-1.805-.441-3.517-.113-5.143.728-1.58.817-2.636 2.08-3.038 3.824-.406 1.763-.212 3.483.567 5.12.507 1.063 1.287 1.885 2.349 2.419 2.486 1.252 5.527.684 7.477-.991 1.539-1.321 2.104-3.08 2.138-5.257-.021-.218-.042-.638-.1-1.054-.327-2.37-1.968-4.231-4.25-4.789zm1.367 9.155c-.479 1.886-2.11 2.724-3.95 2.076-.939-.33-1.641-.961-2.113-1.814-1.086-1.96-1.295-4.044-.677-6.182.412-1.424 1.584-2.203 2.978-2.105 1.246.087 2.204.685 2.907 1.699.741 1.07 1.027 2.287 1.103 3.565.013.205.002.41.002.616l.088.01c-.11.713-.162 1.44-.338 2.135zm-46.764-9.186c-1.899-.434-3.678-.005-5.326.96-1.425.834-2.346 2.08-2.699 3.708-.331 1.521-.196 3.016.343 4.473.328.888.825 1.669 1.554 2.278 1.535 1.281 3.329 1.605 5.238 1.248 1.616-.303 3.036-1.021 4.068-2.364.966-1.256 1.334-2.698 1.372-4.261-.057-.495-.071-.999-.176-1.482-.522-2.411-1.932-4.003-4.374-4.56zm1.549 9.18c-.463 1.876-2.12 2.735-3.947 2.087-1.173-.417-1.937-1.276-2.42-2.377-.774-1.769-.932-3.61-.431-5.476.384-1.427 1.541-2.478 3.312-2.226 1.087.154 1.935.709 2.567 1.592.854 1.191 1.135 2.555 1.174 3.988v.293l.072.011c-.105.704-.157 1.42-.327 2.108z"
                  ></path>
                </svg>

                <svg
                  className="hover:scale-150 transition duration-500"
                  viewBox="0 0 128 128"
                >
                  <g fill="#61DAFB">
                    <circle cx="64" cy="47.5" r="9.3"></circle>
                    <path d="M64 81.7C71.3 88.8 78.5 93 84.3 93c1.9 0 3.7-.4 5.2-1.3 5.2-3 7.1-10.5 5.3-21.2-.3-1.9-.7-3.8-1.2-5.8 2-.6 3.8-1.2 5.6-1.8 10.1-3.9 15.7-9.3 15.7-15.2 0-6-5.6-11.4-15.7-15.2-1.8-.7-3.6-1.3-5.6-1.8.5-2 .9-3.9 1.2-5.8 1.7-10.9-.2-18.5-5.4-21.5-1.5-.9-3.3-1.3-5.2-1.3-5.7 0-13 4.2-20.3 11.3C56.7 6.3 49.5 2.1 43.7 2.1c-1.9 0-3.7.4-5.2 1.3-5.2 3-7.1 10.5-5.3 21.2.3 1.9.7 3.8 1.2 5.8-2 .6-3.8 1.2-5.6 1.8-10.1 3.9-15.7 9.3-15.7 15.2 0 6 5.6 11.4 15.7 15.2 1.8.7 3.6 1.3 5.6 1.8-.5 2-.9 3.9-1.2 5.8-1.7 10.7.2 18.3 5.3 21.2 1.5.9 3.3 1.3 5.2 1.3 5.8.2 13-4 20.3-11zm-5.6-13.5c1.8.1 3.7.1 5.6.1 1.9 0 3.8 0 5.6-.1-1.8 2.4-3.7 4.6-5.6 6.7-1.9-2.1-3.8-4.3-5.6-6.7zM46 57.9c1 1.7 1.9 3.3 3 4.9-3.1-.4-6-.9-8.8-1.5.9-2.7 1.9-5.5 3.1-8.3.8 1.6 1.7 3.3 2.7 4.9zm-5.8-24.1c2.8-.6 5.7-1.1 8.8-1.5-1 1.6-2 3.2-3 4.9-1 1.7-1.9 3.3-2.7 5-1.3-2.9-2.3-5.7-3.1-8.4zm5.5 13.7c1.3-2.7 2.7-5.4 4.3-8.1 1.5-2.6 3.2-5.2 4.9-7.8 3-.2 6-.3 9.1-.3 3.2 0 6.2.1 9.1.3 1.8 2.6 3.4 5.2 4.9 7.8 1.6 2.7 3 5.4 4.3 8.1-1.3 2.7-2.7 5.4-4.3 8.1-1.5 2.6-3.2 5.2-4.9 7.8-3 .2-6 .3-9.1.3-3.2 0-6.2-.1-9.1-.3-1.8-2.6-3.4-5.2-4.9-7.8-1.6-2.7-3-5.4-4.3-8.1zm39.1-5.4l-2.7-5c-1-1.7-1.9-3.3-3-4.9 3.1.4 6 .9 8.8 1.5-.9 2.8-1.9 5.6-3.1 8.4zm0 10.8c1.2 2.8 2.2 5.6 3.1 8.3-2.8.6-5.7 1.1-8.8 1.5 1-1.6 2-3.2 3-4.9.9-1.5 1.8-3.2 2.7-4.9zm2.3 34.7c-.8.5-1.8.7-2.9.7-4.9 0-11-4-17-10 2.9-3.1 5.7-6.6 8.5-10.5 4.7-.4 9.2-1.1 13.4-2.1.5 1.8.8 3.6 1.1 5.4 1.4 8.5.3 14.6-3.1 16.5zm5.2-52.7c11.2 3.2 17.9 8.1 17.9 12.6 0 3.9-4.6 7.8-12.7 10.9-1.6.6-3.4 1.2-5.2 1.7-1.3-4.1-2.9-8.3-4.9-12.6 2-4.3 3.7-8.5 4.9-12.6zm-8-28.2c1.1 0 2 .2 2.9.7 3.3 1.9 4.5 7.9 3.1 16.5-.3 1.7-.7 3.5-1.1 5.4-4.2-.9-8.7-1.6-13.4-2.1-2.7-3.9-5.6-7.4-8.5-10.5 6-5.9 12.1-10 17-10zM69.6 26.8c-1.8-.1-3.7-.1-5.6-.1s-3.8 0-5.6.1c1.8-2.4 3.7-4.6 5.6-6.7 1.9 2.1 3.8 4.4 5.6 6.7zM40.9 7.4c.8-.5 1.8-.7 2.9-.7 4.9 0 11 4 17 10-2.9 3.1-5.7 6.6-8.5 10.5-4.7.4-9.2 1.1-13.4 2.1-.5-1.8-.8-3.6-1.1-5.4-1.4-8.5-.3-14.5 3.1-16.5zm-5.2 52.7C24.5 56.9 17.8 52 17.8 47.5c0-3.9 4.6-7.8 12.7-10.9 1.6-.6 3.4-1.2 5.2-1.7 1.3 4.1 2.9 8.3 4.9 12.6-2 4.3-3.7 8.6-4.9 12.6zm2.1 11c.3-1.7.7-3.5 1.1-5.4 4.2.9 8.7 1.6 13.4 2.1 2.7 3.9 5.6 7.4 8.5 10.5-6 5.9-12.1 10-17 10-1.1 0-2-.2-2.9-.7-3.4-1.9-4.5-8-3.1-16.5zm-4.2 41.2c2.2-2.7 2.3-5.7 1.1-8.7-1.2-3-3.7-4.4-6.8-4.5-3.7-.1-7.5 0-11.2 0H16V125h3v-9.8h4.7c.6 0 1.1.2 1.4.7l6 9.3c.1.2.4.5.6.5h3.9c-2.4-3.7-4.7-7.2-7.1-10.8 2.1-.3 3.9-1 5.1-2.6zm-14.6-.2v-9.9h1.1c2.3 0 4.7-.1 7 .1 2.7.1 4.6 2.2 4.6 4.9s-2.2 4.8-4.9 4.9c-2.4.1-4.8 0-7.8 0zm38.7 1.3c-1.6-7-8-8.8-12.9-6.6-3.8 1.7-5.5 5-5.6 9.1-.1 3.1.8 5.9 3.2 8 2.7 2.4 6 2.7 9.4 2.1 1.9-.4 3.6-1.3 4.9-2.7-.5-.7-1-1.4-1.5-2-2.8 2.4-5.9 3.2-9.3 1.6-2.2-1.1-3.3-3.8-3.5-5.8h15.5v-1.3c.1-.9 0-1.7-.2-2.4zM42.6 115c-.3-3 2.7-6.2 6-6.2 3.8-.1 6.2 2.2 6.3 6.2H42.6zm30.7-8.7c-1.5-.3-3.1-.4-4.6-.3-2.4.2-4.5 1.3-6.2 3.1.5.7.9 1.4 1.5 2.2.2-.2.4-.4.6-.5 1.6-1.5 3.5-2.3 5.8-2.1 1.8.1 3.5.7 4 2.5.4 1.4.3 2.9.4 4.4-.3 0-.4-.1-.5-.2-2.4-2-5.1-2.4-8-1.7-2.7.7-4.4 2.8-4.6 5.5-.2 3.1 1.2 5.4 3.9 6.5 1.7.7 3.6.7 5.4.3 1.4-.3 2-1.1 4-2.2v1.3h2.8c0-4 .1-8.9 0-13.5 0-2.9-1.7-4.7-4.5-5.3zm1.4 12.6c-.1.3 0 .6 0 .9 0 2.1-.5 2.8-2.5 3.6-1.4.5-2.9.7-4.4.2-1.7-.5-2.9-2-2.9-3.7-.1-1.7 1-3.4 2.7-3.9 2.3-.8 4.4-.3 6.3 1.1.6.5 1 1 .8 1.8zm15.6-9.9c2.6-.8 5-.3 6.8 1.9l.3.2c.7-.6 1.3-1.2 2.1-1.9-.3-.3-.4-.5-.6-.8-2.9-3.1-8.6-3.5-12.1-1-4.9 3.6-4.8 10.6-2.4 14.3 2.3 3.5 5.6 4.7 9.5 4.2 2.3-.3 4.2-1.4 5.7-3.3-.7-.6-1.4-1.2-2.1-1.9-.2.2-.3.3-.4.5-2.7 3-7.2 2.7-9.6-.5-1.4-1.9-1.7-4.1-1.3-6.3.2-2.5 1.5-4.5 4.1-5.4zm20.8 13.6c-.2.1-.3.2-.3.2-.8.6-1.6.7-2.5.4-.9-.4-1-1.2-1.1-2v-11.4c0-.2 0 .2.1-.8h3.8v-3h-4v-5h-3v5.4h-2.6c-.2 0-.5.2-.5.4-.1.7 0 1.2 0 2.2h3.2v12.8c0 1.6.4 3 1.8 3.8 1.5.9 4.4.7 5.7-.4.2-.1.3-.5.3-.6-.3-.6-.6-1.3-.9-2z"></path>
                  </g>
                </svg>

                <svg
                  className="hover:scale-150 transition duration-500"
                  viewBox="0 0 128 128"
                >
                  <path
                    d="M3.656 45.043s-3.027-2.191.61-5.113l8.468-7.594s2.426-2.559 4.989-.328l78.175 59.328v28.45s-.039 4.468-5.757 3.976zm0 0"
                    fill="#2489ca"
                  ></path>
                  <path
                    d="M23.809 63.379L3.656 81.742s-2.07 1.543 0 4.305l9.356 8.527s2.222 2.395 5.508-.328l21.359-16.238zm0 0"
                    fill="#1070b3"
                  ></path>
                  <path
                    d="M59.184 63.531l36.953-28.285-.239-28.297S94.32.773 89.055 3.99L39.879 48.851zm0 0"
                    fill="#0877b9"
                  ></path>
                  <path
                    d="M90.14 123.797c2.145 2.203 4.747 1.48 4.747 1.48l28.797-14.222c3.687-2.52 3.171-5.645 3.171-5.645V20.465c0-3.735-3.812-5.024-3.812-5.024L98.082 3.38c-5.453-3.379-9.027.61-9.027.61s4.593-3.317 6.843 2.96v112.317c0 .773-.164 1.53-.492 2.214-.656 1.332-2.086 2.57-5.504 2.051zm0 0"
                    fill="#3c99d4"
                  ></path>
                </svg>

                <svg
                  className="hover:scale-150 transition duration-500"
                  viewBox="0 0 128 128"
                >
                  <g fill="#fff">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M64 1.512c-23.493 0-42.545 19.047-42.545 42.545 0 18.797 12.19 34.745 29.095 40.37 2.126.394 2.907-.923 2.907-2.047 0-1.014-.04-4.366-.058-7.92-11.837 2.573-14.334-5.02-14.334-5.02-1.935-4.918-4.724-6.226-4.724-6.226-3.86-2.64.29-2.586.29-2.586 4.273.3 6.523 4.385 6.523 4.385 3.794 6.504 9.953 4.623 12.38 3.536.383-2.75 1.485-4.628 2.702-5.69-9.45-1.075-19.384-4.724-19.384-21.026 0-4.645 1.662-8.44 4.384-11.42-.442-1.072-1.898-5.4.412-11.26 0 0 3.572-1.142 11.7 4.363 3.395-.943 7.035-1.416 10.65-1.432 3.616.017 7.258.49 10.658 1.432 8.12-5.504 11.688-4.362 11.688-4.362 2.316 5.86.86 10.187.418 11.26 2.728 2.978 4.378 6.774 4.378 11.42 0 16.34-9.953 19.938-19.427 20.99 1.526 1.32 2.886 3.91 2.886 7.88 0 5.692-.048 10.273-.048 11.674 0 1.13.766 2.458 2.922 2.04 16.896-5.632 29.07-21.574 29.07-40.365C106.545 20.56 87.497 1.512 64 1.512z"
                    ></path>
                    <path d="M37.57 62.596c-.095.212-.428.275-.73.13-.31-.14-.482-.427-.382-.64.09-.216.424-.277.733-.132.31.14.486.43.38.642zM39.293 64.52c-.203.187-.6.1-.87-.198-.278-.297-.33-.694-.124-.884.208-.188.593-.1.87.197.28.3.335.693.123.884zm1.677 2.448c-.26.182-.687.012-.95-.367-.262-.377-.262-.83.005-1.013.264-.182.684-.018.95.357.262.385.262.84-.005 1.024zm2.298 2.368c-.233.257-.73.188-1.093-.163-.372-.343-.475-.83-.242-1.087.237-.257.736-.185 1.102.163.37.342.482.83.233 1.086zm3.172 1.374c-.104.334-.582.485-1.064.344-.482-.146-.796-.536-.7-.872.1-.336.582-.493 1.067-.342.48.144.795.53.696.87zm3.48.255c.013.35-.396.642-.902.648-.508.012-.92-.272-.926-.618 0-.354.4-.642.908-.65.506-.01.92.272.92.62zm3.24-.551c.06.342-.29.694-.793.787-.494.092-.95-.12-1.014-.46-.06-.35.297-.7.79-.792.503-.088.953.118 1.017.466zm0 0"></path>
                  </g>
                  <path
                    d="M24.855 108.302h-10.7a.5.5 0 00-.5.5v5.232a.5.5 0 00.5.5h4.173v6.5s-.937.32-3.53.32c-3.056 0-7.327-1.116-7.327-10.508 0-9.393 4.448-10.63 8.624-10.63 3.614 0 5.17.636 6.162.943.31.094.6-.216.6-.492l1.193-5.055a.468.468 0 00-.192-.39c-.403-.288-2.857-1.66-9.058-1.66-7.144 0-14.472 3.038-14.472 17.65 0 14.61 8.39 16.787 15.46 16.787 5.854 0 9.405-2.502 9.405-2.502.146-.08.162-.285.162-.38v-16.316a.5.5 0 00-.5-.5zM79.506 94.81H73.48a.5.5 0 00-.498.503l.002 11.644h-9.392V95.313a.5.5 0 00-.497-.503H57.07a.5.5 0 00-.498.503v31.53c0 .277.224.503.498.503h6.025a.5.5 0 00.497-.504v-13.486h9.392l-.016 13.486c0 .278.224.504.5.504h6.038a.5.5 0 00.497-.504v-31.53a.497.497 0 00-.497-.502zm-47.166.717c-2.144 0-3.884 1.753-3.884 3.923 0 2.167 1.74 3.925 3.884 3.925 2.146 0 3.885-1.758 3.885-3.925 0-2.17-1.74-3.923-3.885-3.923zm2.956 9.608H29.29c-.276 0-.522.284-.522.56v20.852c0 .613.382.795.876.795h5.41c.595 0 .74-.292.74-.805v-20.899a.5.5 0 00-.498-.502zm67.606.047h-5.98a.5.5 0 00-.496.504v15.46s-1.52 1.11-3.675 1.11-2.727-.977-2.727-3.088v-13.482a.5.5 0 00-.497-.504h-6.068a.502.502 0 00-.498.504v14.502c0 6.27 3.495 7.804 8.302 7.804 3.944 0 7.124-2.18 7.124-2.18s.15 1.15.22 1.285c.07.136.247.273.44.273l3.86-.017a.502.502 0 00.5-.504l-.003-21.166a.504.504 0 00-.5-.502zm16.342-.708c-3.396 0-5.706 1.515-5.706 1.515V95.312a.5.5 0 00-.497-.503H107a.5.5 0 00-.5.503v31.53a.5.5 0 00.5.503h4.192c.19 0 .332-.097.437-.268.103-.17.254-1.454.254-1.454s2.47 2.34 7.148 2.34c5.49 0 8.64-2.784 8.64-12.502s-5.03-10.988-8.428-10.988zm-2.36 17.764c-2.073-.063-3.48-1.004-3.48-1.004v-9.985s1.388-.85 3.09-1.004c2.153-.193 4.228.458 4.228 5.594 0 5.417-.935 6.486-3.837 6.398zm-63.689-.118c-.263 0-.937.107-1.63.107-2.22 0-2.973-1.032-2.973-2.368v-8.866h4.52a.5.5 0 00.5-.504v-4.856a.5.5 0 00-.5-.502h-4.52l-.007-5.97c0-.227-.116-.34-.378-.34h-6.16c-.238 0-.367.106-.367.335v6.17s-3.087.745-3.295.805a.5.5 0 00-.36.48v3.877a.5.5 0 00.497.503h3.158v9.328c0 6.93 4.86 7.61 8.14 7.61 1.497 0 3.29-.48 3.586-.59.18-.067.283-.252.283-.453l.004-4.265a.51.51 0 00-.5-.502z"
                    fill="#fff"
                  ></path>
                </svg>

                <svg
                  className="hover:scale-150 transition duration-500 "
                  viewBox="0 0 128 128"
                >
                  <g fill="#f58220">
                    <path d="M11.4 115.62H8.25v-24.4H22.5v3.01H11.4v8.02h10.04v2.93H11.42v10.44h-.02zM27.92 94.74c-.43.43-.96.64-1.57.64-.61 0-1.15-.21-1.57-.64-.43-.43-.64-.96-.64-1.57s.21-1.15.64-1.57c.43-.43.96-.64 1.57-.64.61 0 1.15.21 1.57.64s.64.96.64 1.57-.22 1.11-.64 1.57zm0 20.88h-3.14v-16.7h3.14v16.7zM34.47 115.62h-3.14v-16.7h3.01v2.72h.13c.32-.91.96-1.65 1.97-2.24.99-.59 1.95-.88 2.88-.88s1.71.13 2.34.4l-1.2 2.93c-.4-.16-.96-.24-1.68-.24-1.15 0-2.13.45-3.01 1.36-.88.91-1.31 2.08-1.31 3.52v9.13zM49.23 116.18c-2.53 0-4.58-.85-6.15-2.53s-2.37-3.81-2.37-6.37c0-2.42.77-4.53 2.29-6.29 1.55-1.76 3.49-2.64 5.89-2.64 2.48 0 4.45.8 5.94 2.42 1.49 1.63 2.24 3.78 2.24 6.47l-.03.59H43.85c.08 1.68.67 3.01 1.68 4 1.04.99 2.24 1.47 3.62 1.47 2.24 0 3.78-.96 4.58-2.88l2.8 1.17c-.53 1.31-1.44 2.37-2.69 3.25-1.25.89-2.8 1.34-4.61 1.34zm4.51-10.92c-.08-.96-.51-1.87-1.31-2.72-.8-.85-2-1.31-3.6-1.31-1.17 0-2.16.37-3.01 1.09-.85.72-1.44 1.71-1.76 2.93l9.68.01zM68.1 116.18c-1.28 0-2.42-.27-3.44-.83-1.01-.53-1.76-1.23-2.26-2.05h-.13v2.32h-3.01v-24.4h3.14v7.7l-.13 2.32h.13c.51-.83 1.25-1.49 2.26-2.05 1.01-.53 2.16-.83 3.44-.83 2.16 0 4.02.85 5.6 2.56 1.57 1.71 2.34 3.81 2.34 6.34s-.77 4.64-2.34 6.34c-1.58 1.73-3.44 2.58-5.6 2.58zm-.54-2.87c1.47 0 2.72-.56 3.76-1.65 1.04-1.09 1.57-2.56 1.57-4.37s-.53-3.28-1.57-4.37c-1.04-1.09-2.29-1.65-3.76-1.65s-2.74.53-3.76 1.63c-1.01 1.09-1.55 2.56-1.55 4.4 0 1.84.51 3.3 1.55 4.4 1.05 1.07 2.3 1.61 3.76 1.61zM83.84 116.18c-1.79 0-3.25-.51-4.45-1.55-1.2-1.01-1.79-2.37-1.79-4.05 0-1.81.69-3.25 2.1-4.29 1.41-1.04 3.14-1.55 5.22-1.55 1.84 0 3.36.35 4.53 1.01v-.48c0-1.23-.43-2.21-1.25-2.96-.85-.75-1.87-1.12-3.09-1.12-.91 0-1.73.21-2.48.64-.75.43-1.25 1.01-1.52 1.79l-2.88-1.23c.4-1.01 1.15-1.92 2.29-2.77 1.15-.85 2.64-1.28 4.5-1.28 2.13 0 3.92.61 5.33 1.87 1.41 1.25 2.1 3.01 2.1 5.28v10.12h-3.01v-2.32h-.13c-1.23 1.93-3.07 2.89-5.47 2.89zm.51-2.87c1.31 0 2.48-.48 3.52-1.44 1.07-.96 1.6-2.1 1.6-3.44-.88-.72-2.21-1.09-4-1.09-1.52 0-2.66.32-3.44.99-.77.67-1.17 1.44-1.17 2.32 0 .83.35 1.47 1.07 1.95.71.47 1.51.71 2.42.71zM101.19 116.18c-1.87 0-3.41-.45-4.61-1.36a7.894 7.894 0 01-2.66-3.41l2.8-1.17c.88 2.1 2.4 3.14 4.53 3.14.99 0 1.79-.21 2.4-.64.61-.43.93-1.01.93-1.71 0-1.09-.77-1.84-2.29-2.21L98.9 108c-1.07-.27-2.08-.8-3.04-1.55-.96-.77-1.44-1.79-1.44-3.09 0-1.47.67-2.66 1.97-3.6 1.31-.93 2.85-1.39 4.66-1.39 1.47 0 2.8.35 3.94 1.01 1.17.67 2 1.63 2.48 2.88l-2.72 1.12c-.61-1.47-1.89-2.21-3.81-2.21-.93 0-1.71.19-2.34.59-.64.4-.96.91-.96 1.57 0 .96.75 1.6 2.21 1.95l3.3.77c1.57.37 2.72.99 3.49 1.87.75.88 1.12 1.89 1.12 3.01 0 1.49-.61 2.74-1.84 3.76-1.21 1.01-2.79 1.49-4.73 1.49zM117.58 116.18c-2.53 0-4.58-.85-6.15-2.53-1.57-1.68-2.37-3.81-2.37-6.37 0-2.42.77-4.53 2.29-6.29 1.55-1.76 3.49-2.64 5.89-2.64 2.48 0 4.45.8 5.94 2.42 1.49 1.63 2.24 3.78 2.24 6.47l-.03.59H112.2c.08 1.68.67 3.01 1.68 4 1.04.99 2.24 1.47 3.62 1.47 2.24 0 3.78-.96 4.58-2.88l2.8 1.17c-.53 1.31-1.44 2.37-2.69 3.25-1.26.89-2.8 1.34-4.61 1.34zm4.5-10.92c-.08-.96-.51-1.87-1.31-2.72-.8-.85-2-1.31-3.6-1.31-1.17 0-2.16.37-3.01 1.09-.85.72-1.44 1.71-1.76 2.93l9.68.01zM39.25 59.42l7.69-49.28c.27-1.68 2.52-2.08 3.31-.57l8.26 15.47-19.26 34.38zm54.67 11.97L86.58 26c-.22-1.41-1.99-1.99-3.01-.97L37.35 71.39l25.59 14.36c1.59.88 3.58.88 5.17 0l25.81-14.36zM73.14 31.8l-5.92-11.27c-.66-1.28-2.47-1.28-3.14 0l-26.03 46.4L73.14 31.8z"></path>
                  </g>
                </svg>

                <svg
                  viewBox="0 0 128 128"
                  className="hover:scale-150 transition duration-500"
                >
                  <g fill="#3FB6D3">
                    <path d="M12.3 64.2L76.3 0h39.4L32.1 83.6zM76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"></path>
                  </g>
                  <path
                    fill="#27AACD"
                    d="M81.6 93.9l-20-20-19.4 19.6 19.4 19.6z"
                  ></path>
                  <path
                    fill="#19599A"
                    d="M115.7 128L81.6 93.9l-20 19.2L76.3 128z"
                  ></path>
                  <linearGradient
                    id="flutter-original-a"
                    gradientUnits="userSpaceOnUse"
                    x1="59.365"
                    y1="116.36"
                    x2="86.825"
                    y2="99.399"
                  >
                    <stop offset="0" stopColor="#1b4e94"></stop>
                    <stop offset=".63" stopColor="#1a5497"></stop>
                    <stop offset="1" stopColor="#195a9b"></stop>
                  </linearGradient>
                  <path
                    fill="url(#flutter-original-a)"
                    d="M61.6 113.1l30.8-8.4-10.8-10.8z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 mt-10 ">
            <div className="flex flex-col space-y-11">
              <h4 className="text-center text-3xl text-bold">
                Programming Langs
              </h4>
              <div className="mt-10 md:mt-0 grid md:grid-rows-3 md:grid-cols-4 grid-rows-2 grid-cols-3 gap-10">
                <svg
                  viewBox="0 0 128 128"
                  className="hover:scale-150 transition duration-500 h-28 w-28"
                >
                  <g fillRule="evenodd" clipRule="evenodd">
                    <path
                      fill="#386f9f"
                      d="M51.834 23.017c3.756 0 7.512.058 11.263-.04.995-.026 2.78.797 2.7-1.271-.061-1.683-1.622-1.074-2.568-1.089-4.237-.067-8.488-.228-12.708.037-3.003.187-3.888-.953-3.511-3.707.13-.95.005-1.934.025-2.902.132-6.446 1.69-8.64 7.942-10.23 6.888-1.75 13.937-1.692 20.806-.184 6.175 1.356 8.74 6.16 8.428 10.604-.38 5.423-.086 10.893-.091 16.343-.009 6.853-3.55 10.49-10.459 10.585-5.69.078-11.387.14-17.074-.018-6.778-.19-11.75 5.44-11.784 11.82 0 .484.083.984-.013 1.451-.488 2.343 1.462 6.13-1.022 6.826-3.78 1.062-8.206 1.062-11.54-2.311-1.13-1.14-2.082-2.417-2.584-3.893-2.679-7.865-3.102-15.83-.58-23.818 1.572-4.986 5.848-8.087 11.145-8.176 3.874-.065 7.749-.013 11.623-.013l.002-.014zm6.902-11.12c-.162-1.903-1.185-3.292-3.296-3.35-2.309-.06-3.502 1.336-3.505 3.608-.002 2.106 1.145 3.455 3.241 3.516 2.303.067 3.418-1.36 3.56-3.774z"
                    ></path>
                    <path
                      fill="#ffcf46"
                      d="M80.824 61.572c-4.24 0-8.482-.037-12.722.03-.955.012-2.557-.592-2.607 1.041-.056 1.852 1.663 1.37 2.755 1.381 4.24.053 8.484.098 12.723-.02 2.178-.06 3.067.357 3.23 2.925.737 11.625-4.308 12.63-13.613 14.745-5.338 1.213-11.061.57-16.325-1.788-4.353-1.947-7.024-4.753-6.687-10.007.334-5.186.39-10.439-.009-15.62-.48-6.253 3.41-10.852 10.975-10.854 5.09-.001 10.214-.389 15.26.075 7.215.662 12.872-5.592 13.12-12.864.01-.241-.052-.5.01-.724.636-2.235-1.626-5.557 1.4-6.686 4.573-1.705 9.73.087 12.066 3.557 2.945 4.369 3.343 9.51 3.819 14.53.515 5.411-1.003 10.505-3.276 15.386-1.544 3.31-4.14 4.91-7.757 4.915-4.12.003-8.239 0-12.36 0-.002-.008-.002-.015-.002-.022zm-1.104 10.8c-.453-2.066-1.385-3.476-3.785-3.535-2.496-.06-3.14 1.807-3.127 3.474.014 1.772.508 3.952 3.21 3.748 2.246-.172 3.341-1.563 3.702-3.687z"
                    ></path>
                    <path
                      fill="#386f9f"
                      d="M14.129 114.849c0 2.582.117 5-.055 7.397-.074 1.034 1.066 2.98-1.103 2.978-1.912 0-2.403-1.522-2.342-3.361.117-3.51.034-7.027.034-10.54v-7.998c0-4.82 1.293-6.452 5.903-7.45 4.286-.932 7.654.511 9.386 4.263 1.732 3.753 1.866 7.62.133 11.438-1.708 3.762-4.854 5.166-8.884 4.051-.918-.25-1.845-.467-3.072-.778zm0-9.448c0 1.33.18 2.686-.037 3.98-.502 2.991 1.408 3.728 3.66 4.26 2.227.526 3.754-.421 4.647-2.383 1.501-3.29 1.753-6.683.613-10.162-1.012-3.092-3.349-3.454-6.077-3.07-2.694.383-3.059 2.215-2.824 4.48.1.955.018 1.93.018 2.895zM43.116 114.689c-1.845.48-3.447.992-5.087 1.3-3.59.671-6.248-1.3-7.183-4.894-1.16-4.448-.178-8.879-.148-13.317.013-2.023 1.885-1.234 3.18-2.318 0 4.75.018 8.85-.006 12.947-.013 2.058.519 3.75 2.465 4.835 2.148 1.198 3.91.057 5.78-.712 1.34-.551 1.173-1.676 1.175-2.746.01-3.872-.001-7.74.012-11.612.002-.955-.097-2.122 1.313-2.075 1.257.041 1.804.788 1.783 2.158-.091 6.407.09 12.823-.17 19.221-.197 4.838-3.61 7.793-8.52 8.01-.735.031-1.505.099-1.78-.813-.419-1.404.718-1.139 1.465-1.378 5.401-1.718 6.107-2.744 5.721-8.606zM65.94 98.064c1.429-.675 2.25-1.293 3.153-1.46 5.067-.937 8.95-.58 8.94 6.245-.007 3.515.002 7.031-.007 10.545-.002.984.061 1.942-1.406 2.027-1.547.092-1.887-.793-1.88-2.006.018-3.387.11-6.774.107-10.16-.002-2.63-.539-4.958-3.884-4.95-2.934.005-5.012 2.195-5.027 5.217a899.58 899.58 0 00.003 9.814c.003 1.162.028 2.181-1.652 2.085-1.513-.09-1.327-1.11-1.327-2.049-.01-8.6.032-17.209-.041-25.815-.013-1.508.582-2.444 1.92-2.508 1.888-.087 1.023 1.564 1.051 2.392.123 3.371.05 6.75.05 10.623zM81.93 105.775c-.191-6.715 2.994-10.3 8.76-10.092 2.894.106 5.065 1.39 6.466 3.89 2.475 4.422 2.14 8.846-.538 12.987-1.84 2.844-4.67 4.185-8.12 3.453-3.402-.72-6.066-3.783-6.548-7.353-.128-.945-.02-1.924-.02-2.885zm13.32.157c-.152-1.172-.125-2.806-.613-4.264-.667-2-1.883-3.61-4.364-3.72-2.503-.108-3.752 1.355-4.587 3.38-1.311 3.179-1.226 6.371.194 9.493.912 2.011 2.32 3.483 4.76 3.075 2.403-.401 3.821-1.976 4.312-4.313.223-1.059.187-2.168.298-3.65zM102.257 106.827c0-1.212-.023-2.422.004-3.628.056-2.325-.685-4.901 2.45-6.089 3.59-1.356 7.148-2.372 10.762-.273 1.352.786 1.85 2.214 1.864 3.73.037 4.231-.019 8.464.038 12.695.02 1.476-.368 2.214-2.027 2.174-1.818-.043-1.435-1.283-1.423-2.273.043-3.38.278-6.757.214-10.132-.084-4.25-2.416-5.983-6.389-4.94-1.648.434-2.678 1.234-2.597 3.274.161 3.982.037 7.978.052 11.967.004 1.156.021 2.18-1.647 2.083-1.528-.088-1.278-1.145-1.29-2.062-.028-2.176-.008-4.353-.011-6.526zM58.689 97.403c-.25.296-.46.76-.68.764-3.964.055-2.864 3.014-2.966 5.209-.097 2.045 0 4.1-.029 6.151-.03 2.038.147 3.932 2.627 4.473.711.154 1.035.564.887 1.274-.163.784-.788.753-1.407.745-2.85-.05-4.963-2.065-5.047-5.015-.086-3.014.031-6.035-.04-9.046-.037-1.43.706-3.255-1.6-3.822-.253-.061-.343-.778-.508-1.187 3.076-.965 1.8-3.618 2.222-5.631.2-.953 1.105-1.214 1.96-1.295.865-.082.872.618.9 1.203.114 2.32-1.087 5.425 3.184 5.256.143-.005.31.562.497.92z"
                    ></path>
                  </g>
                </svg>

                <svg
                  viewBox="0 0 128 128"
                  className="hover:scale-150 transition duration-500 h-28 w-28"
                >
                  <path
                    fill="#0074BD"
                    d="M52.581 67.817s-3.284 1.911 2.341 2.557c6.814.778 10.297.666 17.805-.753 0 0 1.979 1.237 4.735 2.309-16.836 7.213-38.104-.418-24.881-4.113zm-2.059-9.415s-3.684 2.729 1.945 3.311c7.28.751 13.027.813 22.979-1.103 0 0 1.373 1.396 3.536 2.157-20.352 5.954-43.021.469-28.46-4.365z"
                  ></path>
                  <path
                    fill="#EA2D2E"
                    d="M67.865 42.431c4.151 4.778-1.088 9.074-1.088 9.074s10.533-5.437 5.696-12.248c-4.519-6.349-7.982-9.502 10.771-20.378.001 0-29.438 7.35-15.379 23.552z"
                  ></path>
                  <path
                    fill="#0074BD"
                    d="M90.132 74.781s2.432 2.005-2.678 3.555c-9.716 2.943-40.444 3.831-48.979.117-3.066-1.335 2.687-3.187 4.496-3.576 1.887-.409 2.965-.334 2.965-.334-3.412-2.403-22.055 4.719-9.469 6.762 34.324 5.563 62.567-2.506 53.665-6.524zm-35.97-26.134s-15.629 3.713-5.534 5.063c4.264.57 12.758.439 20.676-.225 6.469-.543 12.961-1.704 12.961-1.704s-2.279.978-3.93 2.104c-15.874 4.175-46.533 2.23-37.706-2.038 7.463-3.611 13.533-3.2 13.533-3.2zM82.2 64.317c16.135-8.382 8.674-16.438 3.467-15.353-1.273.266-1.845.496-1.845.496s.475-.744 1.378-1.063c10.302-3.62 18.223 10.681-3.322 16.345 0 0 .247-.224.322-.425z"
                  ></path>
                  <path
                    fill="#EA2D2E"
                    d="M72.474 1.313s8.935 8.939-8.476 22.682c-13.962 11.027-3.184 17.313-.006 24.498-8.15-7.354-14.128-13.828-10.118-19.852 5.889-8.842 22.204-13.131 18.6-27.328z"
                  ></path>
                  <path
                    fill="#0074BD"
                    d="M55.749 87.039c15.484.99 39.269-.551 39.832-7.878 0 0-1.082 2.777-12.799 4.981-13.218 2.488-29.523 2.199-39.191.603 0 0 1.98 1.64 12.158 2.294z"
                  ></path>
                  <path
                    fill="#EA2D2E"
                    d="M94.866 100.181h-.472v-.264h1.27v.264h-.47v1.317h-.329l.001-1.317zm2.535.066h-.006l-.468 1.251h-.216l-.465-1.251h-.005v1.251h-.312v-1.581h.457l.431 1.119.432-1.119h.454v1.581h-.302v-1.251zm-44.19 14.79c-1.46 1.266-3.004 1.978-4.391 1.978-1.974 0-3.045-1.186-3.045-3.085 0-2.055 1.146-3.56 5.738-3.56h1.697v4.667h.001zm4.031 4.548v-14.077c0-3.599-2.053-5.973-6.997-5.973-2.886 0-5.416.714-7.473 1.622l.592 2.493c1.62-.595 3.715-1.147 5.771-1.147 2.85 0 4.075 1.147 4.075 3.521v1.779h-1.424c-6.921 0-10.044 2.685-10.044 6.723 0 3.479 2.058 5.456 5.933 5.456 2.49 0 4.351-1.028 6.088-2.533l.316 2.137h3.163v-.001zm13.452 0h-5.027l-6.051-19.689h4.391l3.756 12.099.835 3.635c1.896-5.258 3.24-10.596 3.912-15.733h4.271c-1.143 6.481-3.203 13.598-6.087 19.688zm19.288-4.548c-1.465 1.266-3.01 1.978-4.392 1.978-1.976 0-3.046-1.186-3.046-3.085 0-2.055 1.149-3.56 5.736-3.56h1.701v4.667h.001zm4.033 4.548v-14.077c0-3.599-2.059-5.973-6.999-5.973-2.889 0-5.418.714-7.475 1.622l.593 2.493c1.62-.595 3.718-1.147 5.774-1.147 2.846 0 4.074 1.147 4.074 3.521v1.779h-1.424c-6.923 0-10.045 2.685-10.045 6.723 0 3.479 2.056 5.456 5.93 5.456 2.491 0 4.349-1.028 6.091-2.533l.318 2.137h3.163v-.001zm-56.693 3.346c-1.147 1.679-3.005 3.008-5.037 3.757l-1.989-2.345c1.547-.794 2.872-2.075 3.489-3.269.532-1.063.753-2.43.753-5.701V92.891h4.284v22.173c0 4.375-.348 6.144-1.5 7.867z"
                  ></path>
                </svg>

                <svg
                  viewBox="0 0 128 128"
                  className="hover:scale-150 transition duration-500 h-20 w-20 md:h-28 md:w-28"
                >
                  <path
                    fill="#F0DB4F"
                    d="M1.408 1.408h125.184v125.185H1.408z"
                  ></path>
                  <path
                    fill="#323330"
                    d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                  ></path>
                </svg>

                <svg
                  viewBox="0 0 128 128"
                  className="hover:scale-150 transition duration-500"
                >
                  <path
                    fill="#659AD3"
                    d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
                  ></path>
                  <path
                    fill="#03599C"
                    d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
