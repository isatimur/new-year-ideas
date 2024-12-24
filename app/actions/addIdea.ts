'use server'

interface IdeaFormData {
  title: string;
  description: string;
  difficulty: string;
  cost: string;
  funFactor: string;
  author: string;
}

export async function addIdea(formData: FormData) {
  try {
    const ideaData: IdeaFormData = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      difficulty: formData.get('difficulty') as string,
      cost: formData.get('cost') as string,
      funFactor: formData.get('funFactor') as string,
      author: formData.get('author') as string,
    };

    // Validate the data
    if (!ideaData.title || !ideaData.description || !ideaData.author) {
      return {
        success: false,
        error: 'Пожалуйста, заполните все обязательные поля'
      };
    }

    // Create a new idea object
    const newIdea = {
      id: Date.now(), // Simple way to generate unique IDs
      title: ideaData.title,
      description: ideaData.description,
      difficulty: parseInt(ideaData.difficulty),
      cost: parseInt(ideaData.cost),
      funFactor: parseInt(ideaData.funFactor),
      author: ideaData.author,
    };

    // Here you would typically save the idea to your database
    // For now, we'll just return the new idea
    
    return {
      success: true,
      idea: newIdea
    };
    
  } catch (error) {
    console.error('Error adding idea:', error);
    return {
      success: false,
      error: 'Произошла ошибка при добавлении идеи'
    };
  }
}

