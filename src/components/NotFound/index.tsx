import { Link } from '@tanstack/react-router';
import { Content, Text, Button } from './NotFound';
import { MdError } from "react-icons/md";

export function NotFound() {
    return (
    <Content>
        <div>
            <MdError size={30} color='#213435' />
            <Text>Página não encontrada</Text>
        </div>
        <Link to="/" >
            <Button>Voltar a página inicial</Button>
        </Link>
    </Content>

)}