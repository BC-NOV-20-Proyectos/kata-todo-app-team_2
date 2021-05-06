Rails.application.routes.draw do
  get "/profile", to: "profile#show" 
  get "/todo", to: "tasks#home"
 
  namespace :api do
    get "/tasks", to: "tasks#index"
    post "/tasks", to: "tasks#create"
    put "/tasks", to: "tasks#update"
    delete "/tasks", to: "tasks#destroy"
  end
end
