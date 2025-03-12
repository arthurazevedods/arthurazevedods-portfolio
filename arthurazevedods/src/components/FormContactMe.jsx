import { useState } from 'react';
import Button from './ButtonSend';
import Socials from './Socials';
import axios from 'axios';

function FormContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            const apiUrl = import.meta.VITE_API_URL;
            console.log('API URL:', apiUrl);

            const response = await axios.post(`${apiUrl}/send-email`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
                timeout: 10000, // 10 segundos
            });

            if (response.status === 200) {
                setSuccess(true);
                setFormData({ name: '', email: '', phone: '', message: '' }); // Limpa o formulário
            } else {
                setError(response.data.error || 'Erro ao enviar o formulário.');
            }
        } catch (err) {
            console.error('Erro ao enviar o formulário:', err);
            setError(`Erro ao enviar o formulário: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mt-16 border-t border-gray-100 ">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
                        <h3 className="lg:text-3xl sm:text-2xl font-bold capitalize text-gray-900">
                            Entre em contato
                        </h3>
                        <p className="max-w-xl text-lg">
                            Se você gostou do meu trabalho e deseja discutir um projeto, colaboração ou simplesmente trocar ideias, ficarei feliz em ouvir de você! Sinta-se à vontade para entrar em contato através do formulário. Estou sempre aberto a novas oportunidades e parcerias criativas. Vamos criar algo incrível juntos!
                        </p>

                        <div className="mt-8">
                            <a href="#" className="text-2xl font-bold text-pink-600"> Onde me achar: </a>
                            <Socials justify_center={false} />
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="name">Nome</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Nome"
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="email">Email</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Email"
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="phone">Telefone</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Número de Celular"
                                        type="tel"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="message">Mensagem</label>
                                <textarea
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Mensagem"
                                    rows="8"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <div className="mt-4">
                                <Button type="submit" text={loading ? "Enviando..." : "Enviar E-mail"} disabled={loading} />
                            </div>

                            {success && (
                                <p className="text-green-600 text-sm mt-2">E-mail enviado com sucesso!</p>
                            )}
                            {error && (
                                <p className="text-red-600 text-sm mt-2">{error}</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FormContactMe;