Rails.application.routes.draw do
  root 'pages#index'
  resources :api, only: :index
  # get 'pages', to: 'pages#index'
end
