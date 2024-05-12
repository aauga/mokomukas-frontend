import { Container, Image, Stack } from "react-bootstrap";

export default function InstructionsPage() {
  return (
    <Container>
      <Stack
        direction="vertical"
        gap={4}
        className="my-4"
        style={{
          borderRadius: "16px",
          backgroundColor: "white",
          padding: "16px",
        }}
      >
        <h1>Naudojimosi instrukcijos</h1>

        <Stack direction="vertical">
          <h6>Koks šių pamokų tikslas?</h6>
          <p>
            Išmokti atpažinti netikras socialinių tinklų anketas, kenksmingų
            puslapių, el. laiškų požymius.
          </p>
        </Stack>

        <Stack direction="vertical">
          <h6>Kokios yra pamokų užduotys?</h6>
          <p>
            Patekus į mokymosi erdvę Jūsų užduotis surasti visas kenksmingas
            vietas pateiktame fragmente. Kenksmingą vietą reikia pažymėti pelės
            paspaudimu. Jei kenksminga vieta pažymėta teisingai - ta vieta bus
            pažymėta žaliai. Priešingu atveju ta vieta bus pažymėta raudonai. Už
            teisingai pažymėtą vietą gausite pinigų ir patirties taškų, o už
            neteisingai - prarasite vieną gyvybę. Žemiau pateiktas fragmentas -
            netikras soc. tinklo profilis - su užuomina į viena iš kenksmingų
            vietų.
          </p>
          <Image
            src="/images/task_example.png"
            alt="Užduoties pavyzdys"
            style={{ maxWidth: "800px" }}
          />
        </Stack>

        <Stack direction="vertical">
          <h6>Kaip žinoti kiek yra kenksmingų vietų?</h6>
          <p>
            Mokymosi erdvėje, dešinėje pusėje, bus vaizduojama Jūsų pamokos
            statistika: matuojamas laikas, uždirbtas pinigų, patirties taškų
            kiekis. Žaliame fone galite matyti kiek pažymėjote kenksmingų vietų.
            Jei pažymėjote vieną vietą iš trijų, bus rodoma 1/3.
          </p>
          <Image
            src="/images/stats.png"
            alt="Statistika"
            style={{ maxWidth: "400px" }}
          />
        </Stack>

        <Stack direction="vertical">
          <h6>Ką daryti, jei nežinosiu kurią vietą reikia pažymėti?</h6>
          <p>
            Nerizikuokite ir nespauskite bet kur, nes galite prarasti gyvybes!
            Jei nežinote, kurias vietas reikia pažymėti, galite už pinigus
            nusipirkti užuominą. Užuominas galite rasti mokymosi erdvėje,
            dešinėje pusėje. Nusipirkti galite paspaudę mygtuką “Gauti
            užuominą”.
          </p>
          <Image
            src="/images/hints.png"
            alt="Užuominos"
            style={{ maxWidth: "400px" }}
          />
        </Stack>

        <Stack direction="vertical">
          <h6>
            Manau, kad atradau visas kenksmingas vietas. Kaip pabaigti užduotį?
          </h6>
          <p>
            Jei atradote visas kenksmingas vietas, pabaigti pamoką galite
            paspaudę “Baigti pamoką” mygtuką dešinėje mokymo erdvės pusėje.{" "}
          </p>
          <Image
            src="/images/end_quiz_button.png"
            alt="Užduoties pabaigimo mygtukas"
            style={{ maxWidth: "400px" }}
          />
        </Stack>
      </Stack>
    </Container>
  );
}
