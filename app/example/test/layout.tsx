export default function ExampleLayout({children}: {children: React.ReactNode}) {
    return (
        <section>
            <div>Example Header</div>
            {children}
            <div>Example Footer</div>
        </section>
    );
}
 
 