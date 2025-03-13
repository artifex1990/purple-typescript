

let request: {
    topicId: number,
    status: string | undefined
};

let response: [{
    question: string,
    answer: string,
    tags: string[],
    likes: number,
    status: string
}];

async function getFaqs(req: typeof request): Promise<typeof response> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}