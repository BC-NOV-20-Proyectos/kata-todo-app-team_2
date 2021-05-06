Rails.application.routes.draw do
  root "tasks#home"
 
  namespace :api do
    get "/tasks", to: "tasks#index"
    post "/tasks", to: "tasks#create"
    put "/tasks", to: "tasks#update"
    delete "/tasks", to: "tasks#destroy"
  end
end
