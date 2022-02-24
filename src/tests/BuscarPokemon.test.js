import { fireEvent, render, screen } from '@testing-library/react';
import BuscarPokemon from '../components/BuscarPokemon';

beforeEach(() => {
    render(<BuscarPokemon />);
    fetch.resetMocks();
})

test('rendea correctamente el componente', ()=>{
    //render(<BuscarPokemon />);
    //screen.get *   // me devuelve algo y tiene que existir
    //screen.query *  // me devuelve algo y no tiene por que existir
    //screen.find *   // me devuelve algo que es asincrono
    const titulo = screen.getByText(/Buscador de pokemons/i)
    expect(titulo).toBeInTheDocument()
})

test('formulario correctamente rendeado', ()=>{
    //render(<BuscarPokemon />);
    const submit = screen.getByRole('button', {name: /buscar/i})
    expect(submit).toBeInTheDocument()

    const cajaTexto = screen.getByRole('textbox')
    expect(cajaTexto).toBeInTheDocument()
})

test('buscar un pokemon', async ()=>{
    fetch.mockResponseOnce(JSON.stringify(
        {
            weight: 400,
            sprites: {
                front_default: 'https://fotoguapa/pokemon.png'
            }
        }
    ))

    //render(<BuscarPokemon />);
    const cajaTexto = screen.getByLabelText(/Nombre/i)
    const submit = screen.getByRole('button')

    fireEvent.change(cajaTexto, {target:{value:'pepe'}})
    fireEvent.click(submit)

    const valorPeso = await screen.findByText(/400/i)
    expect(valorPeso).toBeInTheDocument()
})