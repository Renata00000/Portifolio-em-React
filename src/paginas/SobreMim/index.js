import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.JPEG";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Renata!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto Renata"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou Desenvolvedora e estou feliz de te ver por aqui.
            </p>
           
            <p className={styles.paragrafo}>
               Sou um profissional em desenvolvimento na área de tecnologia, com forte compromisso com o aprendizado contínuo e o crescimento pessoal. O meu percurso começou na área de gestão de riscos, onde desenvolvi sólidas competências em análise, prevenção e mitigação de riscos. Essa experiência me proporcionou uma base sólida de responsabilidade e atenção aos detalhes.

            </p>
            <p className={styles.paragrafo}>
                Recentemente, tenho me dedicado ao desenvolvimento de software, participando ativamente de projetos front-end e back-end. Trabalhei com tecnologias como JavaScript, TypeScript, React, Three.js, Tailwind CSS, HTML e CSS para criar interfaces de usuário dinâmicas e intuitivas. No back-end, utilizei Java Spring Boot, Python, Node.js, FastAPI e ferramentas de automação como Robot Framework e Selenium para desenvolver soluções robustas e eficientes. Também usei Pandas para análise de dados.
            </p>
            <p className={styles.paragrafo}>
               Atualmente, estou aprimorando minhas habilidades em diversas linguagens e ferramentas, incluindo MySQL e Arduino. Minhas experiências em projetos pessoais e em equipe me permitiram aplicar meus conhecimentos teóricos na prática, adquirindo experiência em todas as etapas do desenvolvimento de software.
            </p>
            <p className={styles.paragrafo}>
                Além do trabalho técnico, possuo experiência em vendas, onde desenvolvi habilidades em negociação e atendimento ao cliente, além de conhecimentos em gestão empresarial e empreendedorismo. Minha capacidade de adaptação e aprendizado rápido me permite navegar em diferentes ambientes e situações com eficiência.

            </p>
             <p className={styles.paragrafo}>
                Sou uma pessoa que se adapta facilmente a diversos ambientes e situações, proativa, buscando sempre colaborar e aprender com meus colegas. Valorizo o trabalho em equipe e acredito na importância da comunicação eficaz e da empatia no local de trabalho. Meu envolvimento em minicamps, bootcamps, hackathons e programas de treinamento em tecnologia demonstra meu compromisso com o desenvolvimento contínuo.

            </p>
             <p className={styles.paragrafo}>
                Além disso, dedico parte do meu tempo ao voluntariado, acreditando na importância de contribuir positivamente para a sociedade. Esta experiência me ensinou a trabalhar bem em grupo, desenvolver habilidades de liderança e manter uma atitude de paciência e perseverança em todas as minhas funções.
            </p>
             <p className={styles.paragrafo}>
                Estou sempre pronto para novos desafios e oportunidades que me permitam crescer e contribuir significativamente nos projetos e equipes com quem trabalho.

            </p>
        </PostModelo>
    )
}