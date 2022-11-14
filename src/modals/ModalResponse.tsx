
export default function ModalResponse({ response }: { response: string }) {

    return (
        <section className="modal-question">
            <div className="modal-question__overlay">
                <div className="modal-question__container" style={{ color: "white" }}>
                    {response}
                </div>
            </div>
        </section>
    )
}
