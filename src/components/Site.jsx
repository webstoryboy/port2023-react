import React from "react";

const siteText = [
    {
        text: ["make", "site compliant with", "webstandard"],
        title: "비트를 이용한 사이트 제작",
        code: "https://github.com/webstoryboy/port2023-vite",
        view: "https://port2023-vite.netlify.app",
        info: [
            "site coding",
            "production period : two days",
            "use stack : HTML5/CSS3, CSS Variable, Vite",
        ],
    },
    {
        text: ["make", "site compliant with", "react.js"],
        title: "리액트를 이용한 사이트 제작",
        code: "https://github.com/webstoryboy/port2023-react",
        view: "https://port2023-react.netlify.app",
        info: [
            "site coding",
            "production period : two days",
            "use stack : HTML5/CSS3, CSS Variable, react",
        ],
    },
    {
        text: ["make", "site compliant with", "vue.js"],
        title: "뷰를 이용한 사이트 제작",
        code: "https://github.com/webstoryboy/port2023-vue",
        view: "https://port2023-vue.netlify.app",
        info: [
            "site coding",
            "production period : two days",
            "use stack : HTML5/CSS3, Scss Variable, vue",
        ],
    },
    {
        text: ["make", "site compliant with", "next.js"],
        title: "넥스트를 이용한 사이트 제작",
        code: "https://github.com/webstoryboy/port2023-next",
        view: "https://port2023-next.netlify.app",
        info: [
            "site coding",
            "production period : two days",
            "use stack : HTML5/CSS3, Scss Variable, next.js",
        ],
    },
];

const Site = () => {
    return (
        <section id="site">
            <div className="site__inner">
                <h2 className="site__title">
                    Site Coding <em>나의 작업물</em>
                </h2>
                <div className="site__wrap">
                    {siteText.map((site, key) => (
                        <article className={`site__item s${key+1}`} key={key}>
                            <span className="num">{key+1}.</span>
                            <div className="text">
                                <div>{site.text[0]}</div>
                                <div>{site.text[1]}</div>
                                <div>{site.text[2]}</div>
                            </div>
                            <h3 className="title">
                                {site.title}
                            </h3>
                            <div className="btn">
                                <a href={site.code}>code</a>
                                <a href={site.view}>view</a>
                            </div>
                            <div className="info">
                                <span>{site.info[0]}</span>
                                <span>{site.info[1]}</span>
                                <span>{site.info[2]}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Site;