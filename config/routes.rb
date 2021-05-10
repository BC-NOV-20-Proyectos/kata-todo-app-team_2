Rails.application.routes.draw do
  root "tasks#home"
  get "/todopdf", to: "tasks#get_pdf"
  get "/todocsv", to: "tasks#get_csv"
 
  namespace :api do
    get "/tasks", to: "tasks#index"
    post "/tasks", to: "tasks#create"
    put "/tasks", to: "tasks#update"
    delete "/tasks", to: "tasks#destroy"
    get "/profile", to: "profile#show" 
    put "/profile/update", to: "profile#update"
    put "/profile/picture", to: "profile#update_picture"
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
